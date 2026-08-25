# Florida Service Areas Map

Corporate service-area dashboard built with Leaflet. Designed as a reusable template for construction and engineering companies, optimized for embedding in a Wix iframe.

**Version:** 1.0 / V1.1 Production Ready

---

## Installation

1. Clone or download this repository.
2. Serve the folder over HTTP (required for GeoJSON).

```bash
# Option A — Python
python -m http.server 8080

# Option B — Node
npx serve .
```

3. Open `http://localhost:8080` in your browser.

> Opening `index.html` as a `file://` URL will fail to load `florida-counties.geojson`.

---

## Project structure

```
florida-map/
├── index.html                 # App shell + semantics
├── style.css                  # Dashboard UI (no frameworks)
├── app.js                     # Map, search, panel logic
├── data.js                    # ALL company-editable content
├── florida-counties.geojson   # County boundaries (do not edit lightly)
├── README.md
└── CHANGELOG.md
```

To rebrand for another client, edit **only** `data.js`.

---

## How to change company

Edit the `company` object in `data.js`:

| Field | Purpose |
|--------|---------|
| `name` | Company name |
| `pageTitle` | Browser tab title |
| `headerTitle` | Center header title |
| `metaDescription` | SEO meta description |
| `logo` | Brand mark |
| `colors` | Theme tokens |
| `stats` | Header highlight cards |
| `panel` | Sidebar copy |
| `legend` | Map legend labels |
| `mapBadge` | Floating coverage card |
| `search` | Search strings / aria label |

---

## How to change the logo

In `data.js`:

**Text**
```js
logo: { type: "text", value: "Your Company" }
```

**Image URL**
```js
logo: { type: "image", value: "https://cdn.example.com/logo.svg" }
```

**Inline SVG**
```js
logo: { type: "svg", value: `<svg viewBox="0 0 120 32">...</svg>` }
```

---

## How to change colors

Update `company.colors` in `data.js`. Those values are applied as CSS variables at runtime.

Key tokens:

- `primary` — active counties + CTA
- `primaryHover` — button hover
- `inactive` — outside coverage counties
- `selectedBorder` — selected county outline
- `textStrong` / `muted` / `surface` / `card` — UI surfaces

---

## How to add a county

1. Confirm the GeoJSON county `NAME` matches exactly (e.g. `"Sarasota"`).
2. Add an entry to `countyData` in `data.js`:

```js
"Sarasota": {
  active: true,
  office: "Sarasota",
  coverage: "Service Area",
  aliases: ["Siesta Key"],
  services: ["Home Remodeling", "Roofing"],
  projects: "50+",
  button: "Learn More",
  url: "https://example.com/service-areas/sarasota-county"
}
```

3. Update the `Active Counties` stat value if you show a count in the header.

`aliases` power search (cities / neighborhoods). Empty array is fine.

---

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Source:** Deploy from branch `main` / `/ (root)`.
3. Wait for the site URL, e.g. `https://your-user.github.io/florida-map/`.
4. Confirm the map loads and GeoJSON requests succeed over HTTPS.

---

## Embed in Wix

1. Host the app (GitHub Pages or any static host).
2. In Wix, add an **Embed / HTML iframe** element.
3. Use:

```html
<iframe
  src="https://your-user.github.io/florida-map/"
  title="Florida Service Areas"
  width="100%"
  height="780"
  style="border:0;border-radius:12px;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  allowfullscreen>
</iframe>
```

### Wix tips

- Prefer height **700–900px** on desktop.
- On mobile, give the iframe enough height for map + sidebar stack.
- The app calls `map.invalidateSize()` on resize so it behaves correctly inside iframes.
- Use HTTPS for both the Wix site and the embed URL.

---

## Browser support

Tested targets:

- Chrome (latest)
- Edge (latest)
- Firefox (latest)
- Safari (latest, including iOS)

Uses standard ES6, CSS Grid/Flexbox, and Leaflet 1.9.4. No build step required.

---

## Accessibility notes

- Skip link to county details
- Labeled search combobox with keyboard navigation
- Focus-visible styles
- `prefers-reduced-motion` respected
- Decorative icons marked hidden

County polygons are pointer-driven; keyboard users can reach any county through search.

---

## License / attribution

Map tiles: © OpenStreetMap contributors, © CARTO  
Boundaries: `florida-counties.geojson` (US Census-derived county polygons)


## Built With Love project markers

This version adds a project layer using the project data supplied in `Projects.csv`. The source location data currently provides city-level coordinates, so projects in the same city are grouped into a numbered marker rather than being placed at unverified exact street addresses. Clicking a marker opens the projects for that city, with links to the corresponding Built With Love project pages.

Before production, verify that all listed projects and service-area claims are current and that the hosting account/domain is controlled by the business.
