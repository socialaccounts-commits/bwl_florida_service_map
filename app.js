const map = L.map("map", {
    zoomControl: true,
    attributionControl: true
}).setView([27.8, -81.7], 7);

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        maxZoom: 20
    }
).addTo(map);

let geojson = null;
let selectedLayer = null;
let panelTimer = null;
let countyIndex = [];
let searchResults = [];
let activeSuggestion = -1;
let resizeTimer = null;
let projectLayer = null;

const countyInfoEl = document.getElementById("countyInfo");
const searchInput = document.getElementById("searchCounty");
const suggestionsList = document.getElementById("searchSuggestions");
const countyOverlay = document.getElementById("countyOverlay");
const panelCloseBtn = document.getElementById("panelClose");
const countyBackdrop = document.getElementById("countyBackdrop");

function createEl(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null && text !== "") node.textContent = text;
    return node;
}

function clearChildren(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
}

function applyTheme() {
    const root = document.documentElement;
    const colors = company.colors;
    const entries = [
        ["--color-primary", colors.primary],
        ["--color-primary-dark", colors.primaryDark],
        ["--color-primary-hover", colors.primaryHover],
        ["--color-primary-soft", colors.primarySoft],
        ["--color-inactive", colors.inactive],
        ["--color-background", colors.background],
        ["--color-surface", colors.surface],
        ["--color-card", colors.card],
        ["--color-border", colors.borderMuted],
        ["--color-muted", colors.muted],
        ["--color-text", colors.text],
        ["--color-text-strong", colors.textStrong],
        ["--color-shadow", colors.shadow]
    ];

    for (let i = 0; i < entries.length; i++) {
        root.style.setProperty(entries[i][0], entries[i][1]);
    }

    document.getElementById("headerTitle").textContent =
        company.headerTitle || company.panel.title;
    document.getElementById("legendActive").textContent = company.legend.active;
    document.getElementById("legendInactive").textContent = company.legend.inactive;
    const legendProjects = document.getElementById("legendProjects");
    if (legendProjects) legendProjects.textContent = company.legend.projects || "Completed Projects";
    document.getElementById("mapBadgeTitle").textContent = company.mapBadge.title;
    document.getElementById("mapBadgeSubtitle").textContent = company.mapBadge.subtitle;

    const meta = document.getElementById("metaDescription");
    if (meta && company.metaDescription) meta.setAttribute("content", company.metaDescription);

    const theme = document.getElementById("themeColor");
    if (theme) theme.setAttribute("content", colors.primary);

    const searchLabelText = company.search.ariaLabel || company.searchPlaceholder;
    document.getElementById("searchLabel").textContent = searchLabelText;
    searchInput.setAttribute("aria-label", searchLabelText);

    const statsEl = document.getElementById("headerStats");
    clearChildren(statsEl);

    company.stats.forEach(stat => {
        const item = createEl("div", "header-stat");
        item.setAttribute("role", "listitem");
        if (stat.value) item.appendChild(createEl("strong", null, stat.value));
        item.appendChild(createEl("span", null, stat.label));
        statsEl.appendChild(item);
    });
}

function applyLogo() {
    const el = document.getElementById("companyLogo");
    const { type, value } = company.logo;
    clearChildren(el);

    if (type === "image") {
        const img = createEl("img");
        img.src = value;
        img.alt = company.name;
        el.appendChild(img);
        return;
    }

    if (type === "svg") {
        el.innerHTML = value;
        return;
    }

    el.textContent = value;
}

function applyCompany() {
    document.title = company.pageTitle;
    applyTheme();
    applyLogo();
    searchInput.placeholder = company.searchPlaceholder;
    document.getElementById("panelTitle").textContent = company.panel.title;
    document.getElementById("panelSubtitle").textContent = company.panel.subtitle;

    const closeLabel = company.panel.closeLabel || "Close details";
    panelCloseBtn.setAttribute("aria-label", closeLabel);
    countyBackdrop.setAttribute("aria-label", closeLabel);

    closeCountyPanel(false);
}

function renderPanel(build, animate) {
    if (panelTimer) clearTimeout(panelTimer);

    const run = () => {
        clearChildren(countyInfoEl);
        build(countyInfoEl);
        requestAnimationFrame(() => countyInfoEl.classList.remove("is-updating"));
    };

    if (animate === false) {
        run();
        return;
    }

    countyInfoEl.classList.add("is-updating");
    panelTimer = setTimeout(run, 180);
}

function openCountyPanel() {
    countyOverlay.hidden = false;
    requestAnimationFrame(() => {
        countyOverlay.classList.add("is-open");
        countyInfoEl.focus({ preventScroll: true });
        refreshMapSize();
    });
}

function closeCountyPanel(clearSelection) {
    countyOverlay.classList.remove("is-open");
    countyOverlay.hidden = true;

    if (clearSelection !== false && selectedLayer && geojson) {
        geojson.resetStyle(selectedLayer);
        selectedLayer = null;
    }

    refreshMapSize();
}

function initCountyPanel() {
    panelCloseBtn.addEventListener("click", () => closeCountyPanel(true));
    countyBackdrop.addEventListener("click", () => closeCountyPanel(true));

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        if (!suggestionsList.hidden) return;
        if (!countyOverlay.hidden) closeCountyPanel(true);
    });
}

function buildDetailRow(label, value) {
    const p = createEl("p");
    p.appendChild(createEl("strong", null, `${label}:`));
    p.appendChild(document.createTextNode(` ${value}`));
    return p;
}

function updateSidebar(name) {
    const data = countyData[name];
    const labels = company.panel.labels;

    renderPanel(info => {
        info.appendChild(createEl("h2", null, `${name} County`));

        if (!data || !data.active) {
            const card = createEl("div", "card");
            card.appendChild(createEl("h4", null, company.panel.outside.heading));
            card.appendChild(createEl("p", null, company.panel.outside.message));
            info.appendChild(card);
            return;
        }

        const summary = createEl("div", "card");
        summary.appendChild(createEl("h4", null, data.coverage));
        summary.appendChild(buildDetailRow(labels.office, data.office));
        summary.appendChild(buildDetailRow(labels.projects, data.projects));
        info.appendChild(summary);

        const servicesCard = createEl("div", "card");
        servicesCard.appendChild(createEl("h4", null, labels.services));
        const list = createEl("ul");
        data.services.forEach(service => list.appendChild(createEl("li", null, service)));
        servicesCard.appendChild(list);
        info.appendChild(servicesCard);

        appendProjectsToCountyPanel(info, name);

        const button = createEl("a", "button", data.button);
        button.href = data.url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.setAttribute("aria-label", `${data.button}: ${name} County`);
        info.appendChild(button);
    });

    openCountyPanel();
}


function getProjectsForCounty(countyName) {
    return (company.projects || []).filter(project => project.county === countyName);
}

function createProjectIcon(count) {
    return L.divIcon({
        className: "project-marker-wrapper",
        html: `<span class="project-marker" aria-hidden="true">${count > 1 ? count : ""}</span>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -20]
    });
}

function buildProjectPopup(projects, city) {
    const wrap = document.createElement("div");
    wrap.className = "project-popup";

    const heading = createEl("div", "project-popup-heading");
    heading.appendChild(createEl("strong", null, city));
    heading.appendChild(createEl("span", null, `${projects.length} ${projects.length === 1 ? "project" : "projects"}`));
    wrap.appendChild(heading);

    projects.forEach(project => {
        const card = createEl("div", "project-popup-card");
        if (project.image) {
            const img = createEl("img", "project-popup-image");
            img.src = project.image;
            img.alt = project.alt || project.name;
            img.loading = "lazy";
            card.appendChild(img);
        }

        const body = createEl("div", "project-popup-body");
        body.appendChild(createEl("strong", "project-popup-title", project.name));
        if (project.services && project.services.length) {
            body.appendChild(createEl("span", "project-popup-meta", project.services.join(" • ")));
        }
        const link = createEl("a", "project-popup-link", "View Project");
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        body.appendChild(link);
        card.appendChild(body);
        wrap.appendChild(card);
    });

    return wrap;
}

function addProjectMarkers() {
    if (projectLayer) projectLayer.remove();
    projectLayer = L.layerGroup().addTo(map);

    const groups = new Map();
    (company.projects || []).forEach(project => {
        if (typeof project.lat !== "number" || typeof project.lng !== "number") return;
        const key = `${project.city}|${project.lat}|${project.lng}`;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(project);
    });

    groups.forEach((projects, key) => {
        const first = projects[0];
        const marker = L.marker([first.lat, first.lng], {
            icon: createProjectIcon(projects.length),
            title: `${projects.length} ${projects.length === 1 ? "Built With Love project" : "Built With Love projects"} in ${first.city}`,
            riseOnHover: true
        });
        marker.bindPopup(buildProjectPopup(projects, first.city), {
            maxWidth: 360,
            minWidth: 280,
            className: "project-popup-container",
            closeButton: true,
            autoPanPadding: [24, 24]
        });
        projectLayer.addLayer(marker);
    });
}

function appendProjectsToCountyPanel(info, countyName) {
    const projects = getProjectsForCounty(countyName);
    if (!projects.length) return;

    const card = createEl("div", "card projects-card");
    card.appendChild(createEl("h4", null, company.panel.labels.projects || "Completed Projects"));

    const list = createEl("div", "project-list");
    projects.forEach(project => {
        const item = createEl("div", "project-list-item");
        item.appendChild(createEl("strong", null, project.name));
        item.appendChild(createEl("span", null, project.city));
        const link = createEl("a", "project-list-link", "View Project");
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        item.appendChild(link);
        list.appendChild(item);
    });
    card.appendChild(list);
    info.appendChild(card);
}

function style(feature) {
    const county = feature.properties.NAME;
    const colors = company.colors;
    const active = !!(countyData[county] && countyData[county].active);

    return {
        color: colors.border,
        weight: 1,
        fillColor: active ? colors.primary : colors.inactive,
        fillOpacity: active ? 0.45 : 0.45
    };
}

function highlight(e) {
    const layer = e.target;
    if (layer === selectedLayer) return;
    layer.setStyle({ weight: 2, fillOpacity: 0.6 });
}

function reset(e) {
    if (e.target === selectedLayer) return;
    geojson.resetStyle(e.target);
}

function selectCounty(layer) {
    if (!layer || !geojson) return;

    if (selectedLayer === layer) {
        map.fitBounds(layer.getBounds(), {
            padding: [48, 48],
            maxZoom: 10,
            animate: true,
            duration: 0.55
        });
        updateSidebar(layer.feature.properties.NAME);
        return;
    }

    if (selectedLayer) geojson.resetStyle(selectedLayer);

    selectedLayer = layer;
    selectedLayer.setStyle({
        color: company.colors.selectedBorder,
        weight: 2.5,
        fillOpacity: 0.65
    });
    selectedLayer.bringToFront();

    map.fitBounds(selectedLayer.getBounds(), {
        padding: [48, 48],
        maxZoom: 10,
        animate: true,
        duration: 0.55
    });

    updateSidebar(selectedLayer.feature.properties.NAME);
}

function each(feature, layer) {
    layer.on({
        mouseover: highlight,
        mouseout: reset,
        click: e => selectCounty(e.target)
    });
}

function buildCountyIndex() {
    countyIndex = [];
    geojson.eachLayer(layer => {
        const name = layer.feature.properties.NAME;
        const data = countyData[name];
        countyIndex.push({
            name,
            layer,
            active: !!(data && data.active),
            aliases: data && data.aliases ? data.aliases : []
        });
    });
}

function matchesQuery(entry, query) {
    if (entry.name.toLowerCase().includes(query)) return true;
    return entry.aliases.some(alias => alias.toLowerCase().includes(query));
}

function getSearchResults(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return countyIndex
        .filter(entry => matchesQuery(entry, normalized))
        .sort((a, b) => {
            if (a.active !== b.active) return a.active ? -1 : 1;
            return a.name.localeCompare(b.name);
        })
        .slice(0, 10);
}

function closeSuggestions() {
    suggestionsList.hidden = true;
    clearChildren(suggestionsList);
    searchResults = [];
    activeSuggestion = -1;
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.removeAttribute("aria-activedescendant");
}

function setActiveSuggestion(index) {
    const items = suggestionsList.querySelectorAll(".search-suggestion:not(.is-empty)");
    items.forEach(item => item.classList.remove("is-active"));

    if (index < 0 || index >= items.length) {
        activeSuggestion = -1;
        searchInput.removeAttribute("aria-activedescendant");
        return;
    }

    activeSuggestion = index;
    const item = items[index];
    item.classList.add("is-active");
    searchInput.setAttribute("aria-activedescendant", item.id);
    item.scrollIntoView({ block: "nearest" });
}

function chooseSuggestion(entry) {
    searchInput.value = `${entry.name} County`;
    closeSuggestions();
    selectCounty(entry.layer);
}

function renderSuggestions(results) {
    clearChildren(suggestionsList);
    searchResults = results;
    activeSuggestion = -1;

    if (!searchInput.value.trim()) {
        closeSuggestions();
        return;
    }

    if (!results.length) {
        const empty = createEl("li", "search-suggestion is-empty", company.search.noResults);
        empty.setAttribute("role", "presentation");
        suggestionsList.appendChild(empty);
        suggestionsList.hidden = false;
        searchInput.setAttribute("aria-expanded", "true");
        return;
    }

    results.forEach((entry, index) => {
        const item = createEl("li", "search-suggestion", `${entry.name} County`);
        item.id = `search-option-${index}`;
        item.dataset.index = String(index);
        item.setAttribute("role", "option");
        suggestionsList.appendChild(item);
    });

    suggestionsList.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
}

function initSearch() {
    searchInput.addEventListener("input", () => {
        renderSuggestions(getSearchResults(searchInput.value));
    });

    searchInput.addEventListener("keydown", event => {
        const open = !suggestionsList.hidden;

        if (event.key === "ArrowDown") {
            if (!open) renderSuggestions(getSearchResults(searchInput.value));
            if (!searchResults.length) return;
            event.preventDefault();
            setActiveSuggestion((activeSuggestion + 1) % searchResults.length);
            return;
        }

        if (event.key === "ArrowUp") {
            if (!open || !searchResults.length) return;
            event.preventDefault();
            setActiveSuggestion(
                activeSuggestion <= 0 ? searchResults.length - 1 : activeSuggestion - 1
            );
            return;
        }

        if (event.key === "Enter") {
            if (!open || activeSuggestion < 0) return;
            event.preventDefault();
            chooseSuggestion(searchResults[activeSuggestion]);
            return;
        }

        if (event.key === "Escape") closeSuggestions();
    });

    suggestionsList.addEventListener("mousedown", event => {
        const item = event.target.closest(".search-suggestion:not(.is-empty)");
        if (!item) return;
        event.preventDefault();
        const entry = searchResults[Number(item.dataset.index)];
        if (entry) chooseSuggestion(entry);
    });

    document.addEventListener("click", event => {
        if (!event.target.closest(".search")) closeSuggestions();
    });
}

function refreshMapSize() {
    map.invalidateSize({ animate: false });
}

function initMapResize() {
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(refreshMapSize, 120);
    });
}

applyCompany();
initSearch();
initCountyPanel();
initMapResize();

fetch("florida-counties.geojson")
    .then(r => {
        if (!r.ok) throw new Error("Unable to load county boundaries");
        return r.json();
    })
    .then(data => {
        geojson = L.geoJSON(data, {
            style,
            onEachFeature: each
        }).addTo(map);

        buildCountyIndex();
        addProjectMarkers();
        map.fitBounds(geojson.getBounds(), {
            padding: [24, 24],
            animate: false
        });
        refreshMapSize();
    })
    .catch(() => {
        renderPanel(info => {
            info.appendChild(createEl("h3", null, "Map unavailable"));
            info.appendChild(createEl(
                "p",
                null,
                "County boundaries could not be loaded. Please refresh the page."
            ));
        }, false);
        openCountyPanel();
    });
