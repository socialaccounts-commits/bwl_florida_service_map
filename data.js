const company = {

    name: "Built With Love",
    pageTitle: "Built With Love | Service Areas & Projects",
    headerTitle: "Service Areas & Projects",
    metaDescription: "Explore Built With Love service areas and completed construction projects across the Tampa Bay area.",

    // Logo: "text" | "image" | "svg"
    logo: {
        type: "svg",
        value: `<svg width="1054.59" height="714.123" preserveAspectRatio="xMidYMid meet" data-bbox="0 -0.003 1054.59 714.123" viewBox="0 -0.003 1054.59 714.123" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Built With Love">
    <g>
        <path d="M750.45 388.29h-35.19c-5.08 0-8.71-1.14-10.88-3.42s-3.26-5.9-3.26-10.88v-86.56c0-5.08 1.11-8.73 3.34-10.96s5.83-3.34 10.8-3.34h37.31c5.5 0 10.26.34 14.3 1.02 4.03.68 7.65 1.99 10.84 3.93 2.72 1.62 5.13 3.68 7.23 6.17s3.69 5.24 4.79 8.25q1.65 4.515 1.65 9.54 0 17.28-17.28 25.29c15.13 4.82 22.7 14.19 22.7 28.12q0 9.66-4.95 17.4t-13.35 11.43c-3.51 1.47-7.54 2.5-12.1 3.1s-9.87.9-15.95.9Zm-26-97.64v29.77h21.36q8.715 0 13.47-1.65c3.17-1.1 5.59-3.19 7.27-6.28 1.31-2.2 1.96-4.66 1.96-7.38 0-5.81-2.07-9.67-6.21-11.59-4.14-1.91-10.45-2.87-18.93-2.87h-18.93Zm24.27 46.5h-24.27v33.62h25.06q23.64 0 23.64-17.04c0-5.81-2.04-10.03-6.13-12.65q-6.12-3.93-18.3-3.93" fill="currentColor" data-color="1"></path>
        <path d="M871.18 378.15v-2.75c-2.57 3.25-5.26 5.97-8.09 8.17s-5.92 3.84-9.27 4.91-7.17 1.61-11.47 1.61c-5.18 0-9.83-1.07-13.94-3.22q-6.165-3.225-9.54-8.88c-2.67-4.56-4.01-11.1-4.01-19.64v-42.49c0-4.29.97-7.5 2.91-9.62s4.5-3.18 7.7-3.18 5.86 1.07 7.85 3.22 2.98 5.34 2.98 9.58v34.33c0 4.97.42 9.15 1.26 12.53s2.34 6.02 4.52 7.93c2.17 1.91 5.12 2.87 8.84 2.87s7.02-1.07 10.21-3.22q4.785-3.225 6.99-8.4c1.2-3.04 1.81-9.69 1.81-19.95v-26.08c0-4.24.99-7.44 2.98-9.58 1.99-2.15 4.58-3.22 7.78-3.22s5.76 1.06 7.7 3.18 2.91 5.33 2.91 9.62V378c0 4.08-.93 7.15-2.79 9.19s-4.25 3.06-7.19 3.06-5.35-1.06-7.27-3.18c-1.91-2.12-2.87-5.09-2.87-8.92" fill="currentColor" data-color="1"></path>
        <path d="M923.49 293.09c-2.98 0-5.54-.92-7.66-2.75s-3.18-4.42-3.18-7.78c0-3.04 1.09-5.54 3.26-7.5s4.7-2.95 7.58-2.95 5.24.89 7.38 2.67c2.15 1.78 3.22 4.37 3.22 7.78s-1.05 5.88-3.14 7.74-4.58 2.79-7.46 2.79m10.6 22.15v61.97c0 4.29-1.02 7.54-3.06 9.74s-4.63 3.3-7.78 3.3-5.69-1.13-7.66-3.38c-1.96-2.25-2.95-5.47-2.95-9.66v-61.35c0-4.24.98-7.44 2.95-9.58 1.96-2.15 4.52-3.22 7.66-3.22s5.73 1.07 7.78 3.22 3.06 5.13 3.06 8.95Z" fill="currentColor" data-color="1"></path>
        <path d="M956.24 377.21v-93c0-4.29.96-7.54 2.87-9.74q2.865-3.3 7.74-3.3c4.875 0 5.86 1.09 7.85 3.26s2.98 5.43 2.98 9.78v93c0 4.35-1.01 7.61-3.02 9.78-2.02 2.17-4.62 3.26-7.82 3.26s-5.69-1.13-7.66-3.38-2.95-5.47-2.95-9.66Z" fill="currentColor" data-color="1"></path>
        <path d="M1001.02 304.95h2.36v-12.88q0-5.19.27-8.13t1.53-5.07c.84-1.47 2.04-2.66 3.61-3.57 1.57-.92 3.33-1.37 5.26-1.37q4.08 0 7.38 3.06c1.47 1.36 2.4 3.02 2.79 4.99s.59 4.75.59 8.37v14.61h7.85c3.04 0 5.35.72 6.95 2.16s2.4 3.29 2.4 5.54c0 2.88-1.14 4.9-3.42 6.05s-5.54 1.73-9.78 1.73h-4.01v39.43c0 3.35.12 5.93.35 7.74.24 1.81.86 3.27 1.89 4.4 1.02 1.13 2.68 1.69 4.99 1.69 1.26 0 2.96-.22 5.11-.67s3.82-.67 5.03-.67c1.73 0 3.29.69 4.67 2.08 1.39 1.39 2.08 3.1 2.08 5.14 0 3.46-1.89 6.1-5.66 7.93s-9.19 2.75-16.26 2.75c-6.7 0-11.78-1.13-15.24-3.38s-5.72-5.37-6.79-9.35-1.61-9.29-1.61-15.95v-41.16h-2.83c-3.09 0-5.45-.73-7.07-2.2q-2.43-2.205-2.43-5.58c0-3.375.85-4.1 2.55-5.54s4.18-2.16 7.42-2.16Z" fill="currentColor" data-color="1"></path>
        <path d="m713.14 457.17 13.98 47.91 12.72-44.54c1.36-4.66 2.37-7.84 3.02-9.54s1.89-3.33 3.69-4.87c1.81-1.54 4.28-2.32 7.42-2.32s5.69.77 7.5 2.32c1.81 1.54 3.08 3.22 3.81 5.03s1.75 4.94 3.06 9.39l12.72 44.54 14.14-47.91q1.41-5.19 2.28-7.5c.58-1.54 1.54-2.91 2.91-4.08 1.36-1.18 3.33-1.77 5.89-1.77s4.79.89 6.68 2.67 2.83 3.88 2.83 6.28c0 2.2-.81 5.52-2.43 9.98l-17.52 51.37c-1.52 4.35-2.7 7.49-3.53 9.43-.84 1.94-2.16 3.67-3.97 5.18-1.81 1.52-4.28 2.28-7.42 2.28s-5.8-.81-7.66-2.43-3.23-3.61-4.12-5.97-1.86-5.42-2.91-9.19l-12.25-41.79-11.86 41.79c-1.57 5.81-3.27 10.2-5.11 13.16q-2.745 4.44-9.66 4.44c-2.36 0-4.36-.46-6.01-1.37s-3.02-2.23-4.12-3.93-2.07-3.72-2.91-6.05-1.49-4.18-1.96-5.54l-17.36-51.37c-1.73-4.82-2.59-8.14-2.59-9.98 0-2.3.92-4.37 2.75-6.21 1.83-1.83 4.08-2.75 6.76-2.75 3.56 0 5.97 1.01 7.23 3.02 1.26 2.02 2.59 5.46 4.01 10.33Z" fill="currentColor" data-color="1"></path>
        <path d="M841.41 433.84c-2.98 0-5.54-.92-7.66-2.75s-3.18-4.42-3.18-7.78c0-3.04 1.09-5.54 3.26-7.5s4.7-2.95 7.58-2.95 5.24.89 7.38 2.67c2.15 1.78 3.22 4.37 3.22 7.78s-1.05 5.88-3.14 7.74-4.58 2.79-7.46 2.79m10.6 22.16v61.97c0 4.29-1.02 7.54-3.06 9.74s-4.63 3.3-7.78 3.3-5.69-1.13-7.66-3.38c-1.96-2.25-2.95-5.47-2.95-9.66v-61.35c0-4.24.98-7.44 2.95-9.58 1.96-2.15 4.52-3.22 7.66-3.22s5.73 1.07 7.78 3.22c2.04 2.15 3.06 5.13 3.06 8.95Z" fill="currentColor" data-color="1"></path>
        <path d="M875.34 445.71h2.36v-12.88q0-5.19.27-8.13t1.53-5.07c.84-1.47 2.04-2.66 3.61-3.57 1.57-.92 3.33-1.37 5.26-1.37q4.08 0 7.38 3.06c1.47 1.36 2.4 3.02 2.79 4.99s.59 4.75.59 8.37v14.61h7.85c3.04 0 5.35.72 6.95 2.16s2.4 3.29 2.4 5.54c0 2.88-1.14 4.9-3.42 6.05s-5.54 1.73-9.78 1.73h-4.01v39.43c0 3.35.12 5.93.35 7.74.24 1.81.86 3.27 1.89 4.4s2.68 1.69 4.99 1.69c1.26 0 2.96-.22 5.11-.67s3.82-.67 5.03-.67c1.73 0 3.29.69 4.67 2.08s2.08 3.1 2.08 5.14c0 3.46-1.89 6.1-5.66 7.93s-9.19 2.75-16.26 2.75c-6.7 0-11.78-1.13-15.24-3.38s-5.72-5.37-6.79-9.35-1.61-9.29-1.61-15.95v-41.16h-2.83c-3.09 0-5.45-.73-7.07-2.2q-2.43-2.205-2.43-5.58c0-3.375.85-4.1 2.55-5.54s4.18-2.16 7.42-2.16Z" fill="currentColor" data-color="1"></path>
        <path d="M952.08 424.97v31.81c2.72-3.14 5.38-5.63 7.97-7.46s5.46-3.21 8.6-4.12 6.52-1.37 10.13-1.37c5.45 0 10.28 1.15 14.49 3.46 4.22 2.3 7.53 5.66 9.94 10.05 1.52 2.57 2.54 5.43 3.06 8.6s.79 6.82.79 10.96v41.08c0 4.29-.98 7.54-2.95 9.74-1.96 2.2-4.57 3.3-7.82 3.3-7.07 0-10.6-4.35-10.6-13.04v-36.21c0-6.86-1.02-12.14-3.06-15.83s-5.92-5.54-11.63-5.54c-3.82 0-7.27 1.09-10.33 3.26s-5.35 5.14-6.87 8.92c-1.15 3.19-1.73 8.88-1.73 17.04v28.36c0 4.24-.96 7.48-2.87 9.7-1.91 2.23-4.57 3.34-7.97 3.34-7.07 0-10.6-4.35-10.6-13.04v-93q0-6.525 2.79-9.78c1.86-2.17 4.46-3.26 7.82-3.26s6.06 1.1 7.97 3.3 2.87 5.45 2.87 9.74Z" fill="currentColor" data-color="1"></path>
        <path d="M724.14 566.83v83.81h47.29c3.77 0 6.66.92 8.68 2.75s3.02 4.14 3.02 6.91-.99 5.12-2.98 6.87-4.9 2.63-8.72 2.63h-56.32c-5.08 0-8.73-1.13-10.96-3.38s-3.34-5.89-3.34-10.92v-88.68c0-4.71 1.06-8.25 3.18-10.6 2.12-2.36 4.91-3.53 8.37-3.53s6.35 1.17 8.52 3.5 3.26 5.88 3.26 10.64" fill="currentColor" data-color="1"></path>
        <path d="M877.22 628.17c0 6.39-.99 12.28-2.98 17.67s-4.87 10.03-8.64 13.9c-3.77 3.88-8.27 6.85-13.51 8.92s-11.13 3.1-17.67 3.1-12.33-1.05-17.52-3.14c-5.18-2.09-9.67-5.09-13.47-8.99s-6.68-8.51-8.64-13.82c-1.96-5.32-2.95-11.19-2.95-17.63s.99-12.44 2.98-17.83 4.84-10 8.56-13.82 8.22-6.77 13.51-8.84 11.13-3.1 17.52-3.1 12.38 1.05 17.67 3.14 9.82 5.08 13.59 8.95c3.77 3.88 6.64 8.48 8.6 13.82s2.95 11.23 2.95 17.67m-21.52 0c0-8.74-1.92-15.55-5.77-20.42s-9.02-7.3-15.51-7.3c-4.19 0-7.88 1.09-11.08 3.26-3.19 2.17-5.66 5.38-7.38 9.62-1.73 4.24-2.59 9.19-2.59 14.85s.85 10.5 2.55 14.69 4.14 7.4 7.3 9.62c3.17 2.23 6.9 3.34 11.19 3.34 6.49 0 11.66-2.45 15.51-7.34 3.85-4.9 5.77-11.66 5.77-20.3Z" fill="currentColor" data-color="1"></path>
        <path d="m907.15 597.93 17.36 48.7 18.69-50.82c1.47-4.08 2.91-6.98 4.32-8.68s3.56-2.55 6.44-2.55c2.72 0 5.04.92 6.95 2.75s2.87 3.95 2.87 6.36q0 1.41-.51 3.3c-.34 1.26-.73 2.43-1.18 3.53s-.96 2.36-1.53 3.77l-20.58 51.06c-.58 1.47-1.32 3.33-2.24 5.58s-1.94 4.18-3.06 5.77-2.51 2.84-4.16 3.73-3.65 1.34-6.01 1.34c-3.04 0-5.46-.69-7.27-2.08s-3.14-2.91-4.01-4.56-2.32-4.91-4.36-9.78l-20.42-50.51c-.47-1.26-.96-2.51-1.45-3.77-.5-1.26-.92-2.54-1.26-3.85s-.51-2.43-.51-3.38c0-1.47.45-2.92 1.34-4.36s2.12-2.62 3.69-3.53c1.57-.92 3.27-1.37 5.11-1.37 3.56 0 6.01 1.02 7.34 3.06 1.34 2.04 2.81 5.47 4.44 10.29" fill="currentColor" data-color="1"></path>
        <path d="M1036.91 633.43h-41.94c.05 4.87 1.03 9.16 2.95 12.88q2.865 5.58 7.62 8.4c3.17 1.89 6.66 2.83 10.49 2.83 2.57 0 4.91-.3 7.03-.9s4.18-1.54 6.17-2.83c1.99-1.28 3.82-2.66 5.5-4.12 1.68-1.47 3.85-3.46 6.52-5.97q1.65-1.41 4.71-1.41c2.2 0 3.98.6 5.34 1.81 1.36 1.2 2.04 2.91 2.04 5.11 0 1.94-.76 4.2-2.28 6.79s-3.81 5.08-6.87 7.46-6.91 4.36-11.55 5.93-9.96 2.36-15.98 2.36c-13.77 0-24.48-3.93-32.13-11.78s-11.47-18.51-11.47-31.97c0-6.34.94-12.21 2.83-17.63s4.63-10.07 8.25-13.94c3.61-3.88 8.06-6.85 13.35-8.92s11.15-3.1 17.59-3.1c8.38 0 15.57 1.77 21.56 5.3q9 5.295 13.47 13.71c2.98 5.6 4.48 11.31 4.48 17.12 0 5.39-1.54 8.89-4.63 10.49s-7.44 2.4-13.04 2.4Zm-41.94-12.17h38.88c-.52-7.33-2.5-12.82-5.93-16.46s-7.95-5.46-13.55-5.46-9.73 1.85-13.16 5.54q-5.145 5.535-6.24 16.38" fill="currentColor" data-color="1"></path>
        <path d="M566.65 183.57c-32.92-28.24-184.53-160.3-184.53-160.3C364.3 7.81 343.41-.18 322.41 0c-21-.18-41.89 7.8-59.71 23.27 0 0-151.72 131.93-184.53 160.3C43.11 213.88 0 247.82 0 287.75v331.83c0 52 39.35 94.54 87.46 94.54h469.91c48.1 0 87.46-42.54 87.46-94.54V287.75c0-39.93-31.83-64.42-78.17-104.17Zm29.63 405.69c0 60.29-8.67 81.81-74.29 81.81H122.83c-65.62 0-74.29-21.52-74.29-81.81V302.12c0-34.55 41.23-65.59 67.73-90.42 26.18-24.52 156.95-135.27 156.95-135.27 19.19-16.46 34.47-24.34 49.2-24.54 14.72.2 30 8.08 49.2 24.54 0 0 130.77 110.75 156.95 135.27 26.5 24.83 67.73 55.87 67.73 90.42v287.14Z" fill="currentColor" data-color="1"></path>
        <path d="m508.19 443.89-.03-91.96c0-12.74-6.81-24.51-17.85-30.87l-67.81-39.05a35.63 35.63 0 0 0-38.85 2.15l-61.25 44.92-61.21-44.9a35.62 35.62 0 0 0-38.89-2.12l-67.57 39.02a35.64 35.64 0 0 0-17.81 30.77l-.22 91.96a35.68 35.68 0 0 0 10.49 25.34l150.12 149.42c13.9 13.84 36.37 13.84 50.27 0L497.7 469.15a35.6 35.6 0 0 0 10.49-25.26m-185.8-83.29.02.02 71-52.07a20.16 20.16 0 0 1 22.02-1.2L478.91 344a7.64 7.64 0 0 1 3.82 6.62c0 2.03-.81 3.97-2.24 5.41L336.67 499.85c-7.88 7.88-20.66 7.88-28.54 0L164.32 356.04a7.647 7.647 0 0 1 1.58-12.03l63.48-36.65c6.93-4 15.57-3.53 22.02 1.2l70.97 52.05Zm12.74 176.75 141.86-141.86c2.12-2.12 5.74-.62 5.74 2.38v48.91c0 .89-.36 1.75-.99 2.38L335.13 595.04zm-25.44.01v57.69L163.08 449.17c-.63-.63-.99-1.49-.99-2.38v-48.91c0-3 3.62-4.5 5.74-2.38z" fill="currentColor" data-color="1"></path>
    </g>
</svg>`
    },

    colors: {
        primary: "#0B63CE",
        primaryDark: "#143D6B",
        primaryHover: "#084c9c",
        primarySoft: "#E8F1FB",
        inactive: "#D7DCE5",
        selectedBorder: "#143D6B",
        border: "#ffffff",
        borderMuted: "#E6EAF0",
        background: "#F3F6FB",
        surface: "#ffffff",
        card: "#F7F9FC",
        muted: "#5B6575",
        text: "#3F4B5F",
        textStrong: "#143D6B",
        shadow: "rgba(20, 61, 107, 0.10)"
    },

    searchPlaceholder: "Search county...",
    search: {
        noResults: "No counties found",
        ariaLabel: "Search Florida counties"
    },

    panel: {
        title: "Service Area Details",
        subtitle: "Coverage, services, and completed projects",
        closeLabel: "Close details",
        empty: {
            hero: "",
            heading: "Coverage Area",
            body: "Click on a county to view services."
        },
        outside: {
            heading: "Outside Coverage",
            message: "This county is currently outside our service area."
        },
        labels: {
            office: "Office",
            projects: "Projects",
            services: "Services",
            projects: "Completed Projects"
        }
    },

    legend: {
        active: "Active Service Area",
        inactive: "Outside Coverage",
        projects: "Completed Projects"
    },

    mapBadge: {
        title: "Tampa Bay Coverage",
        subtitle: "Residential & commercial construction"
    },

    stats: [
        { label: "Active Counties", value: "4" },
        { label: "Projects Shown", value: "13" },
        { label: "Residential & Commercial", value: "" }
    ],

    projects: [
        {
                "name": "Full Home Remodel, Co-Living Conversion & ADU Addition",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_4bf300fdcc724d958d3cad6ac6e0af74~mv2.jpg",
                "alt": "Full Home Remodel, Co-Living Conversion & ADU Addition in St. Petersburg, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/home-remodel-coliving-conversion-adu-addition"
        },
        {
                "name": "Modern Kitchen Remodel with Custom Cabinetry",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_faae2575305a460c8821760367a39df1~mv2.jpg",
                "alt": "Modern Kitchen Remodel with Custom Cabinetry by Built with Love in St. Petersburg, Florida",
                "url": "https://www.builtwithlovefl.com/projects/modern-kitchen-remodel"
        },
        {
                "name": "Full Interior Restoration & Flood-Proofing Renovation",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_b9d9e9252fb540bf8c37f20914039cfe~mv2.jpg",
                "alt": "Full Interior Restoration & Flood-Proofing Renovation in St. Petersburg, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/interior-restoration-flood-renovation"
        },
        {
                "name": "Full Home Renovation & ADU Conversion",
                "city": "Seminole",
                "county": "Pinellas",
                "lat": 27.8397466,
                "lng": -82.79121339999999,
                "image": "https://static.wixstatic.com/media/039c3f_f91d4fe96c014a7d973f2d4954c308a7~mv2.jpg",
                "alt": "Full Home Renovation & ADU Conversion by Built with Love in Seminole, Florida",
                "url": "https://www.builtwithlovefl.com/projects/home-renovation-adu-conversion"
        },
        {
                "name": "Balcony Deck Restoration & Roofing Repairs",
                "city": "Tierra Verde",
                "county": "Pinellas",
                "lat": 27.6919746,
                "lng": -82.7234337,
                "image": "https://static.wixstatic.com/media/039c3f_46aeff96d75b430ba6f5012f7f2da971~mv2.jpg",
                "alt": "Balcony Deck Restoration & Roofing Repairs in Tierra Verde, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/deck-restoration-roofing-repair"
        },
        {
                "name": "Comprehensive Interior Renovation & Flood Mitigation",
                "city": "Clearwater",
                "county": "Pinellas",
                "lat": 27.9655722,
                "lng": -82.7958948,
                "image": "https://static.wixstatic.com/media/039c3f_43f13e66f1a249859597dfd0fb817743~mv2.webp",
                "alt": "Comprehensive Interior Renovation & Flood Mitigation in Clearwater, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/interior-renovation-flood-mitigation"
        },
        {
                "name": "Flood Restoration & Kitchen Expansion with Luxury Finishes",
                "city": "North Redington Beach",
                "county": "Pinellas",
                "lat": 27.8161361,
                "lng": -82.8206587,
                "image": "https://static.wixstatic.com/media/039c3f_6bccc73ea1d74b32bad85d98dd21ed3b~mv2.jpg",
                "alt": "Flood Restoration & Kitchen Expansion with Luxury Finishes by Built with Love in North Redington Beach, Florida",
                "url": "https://www.builtwithlovefl.com/projects/flood-restoration-kitchen-expansion"
        },
        {
                "name": "Full Home Flood Remediation & Complete Interior Reconstruction",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_0722b49acdc34c7e9e1a19022222a189~mv2.jpg",
                "alt": "Full Home Flood Remediation & Complete Interior Reconstruction by Built with Love in St. Petersburg, Florida",
                "url": "https://www.builtwithlovefl.com/projects/flood-remediation-interior-reconstruction"
        },
        {
                "name": "Full Interior Renovation with Kitchen & Bath Rebuild",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_faca9bea962e493fbd551292f19474b1~mv2.jpg",
                "alt": "Full Interior Renovation with Kitchen & Bath Rebuild by Built with Love in St. Petersburg, Florida",
                "url": "https://www.builtwithlovefl.com/projects/interior-renovation-kitchen-bath-rebuild"
        },
        {
                "name": "Residential Conversion to Co-Living Housing",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_4bdf0b15d1514d31aa3a6d3ad932a837~mv2.jpg",
                "alt": "Residential Conversion to Co-Living Housing in St. Petersburg, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/residential-conversion-to-coliving"
        },
        {
                "name": "Single-Family to Co-Living Transformation",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_fc499c147fe54ca5a679968ea643e0d3~mv2.jpg",
                "alt": "Single-Family to Co-Living Transformation in St. Petersburg, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/single-family-to-coliving-transformation"
        },
        {
                "name": "Comprehensive Structural & Interior Restoration",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_ece66a2b90c6408dbbbe61f16edfabb9~mv2.jpg",
                "alt": "Comprehensive Structural & Interior Restoration by Built with Love in St. Petersburg, Florida",
                "url": "https://www.builtwithlovefl.com/projects/structural-interior-renovation"
        },
        {
                "name": "Full Home Remodel & Co-Living Conversion",
                "city": "St. Petersburg",
                "county": "Pinellas",
                "lat": 27.7671271,
                "lng": -82.6384451,
                "image": "https://static.wixstatic.com/media/039c3f_604bb8b37beb41ada910f1f8d1a35bcb~mv2.jpg",
                "alt": "Full Home Remodel & Co-Living Conversion in St. Petersburg, Florida by Built with Love",
                "url": "https://www.builtwithlovefl.com/projects/home-remodel-coliving-conversion"
        }
],
};

const countyData = {

    "Pinellas": {
        active: true,
        office: "St. Petersburg",
        coverage: "Main Service Area",
        aliases: ["St. Petersburg", "Clearwater"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/pinellas-county"
    },

    "Hillsborough": {
        active: true,
        office: "Tampa",
        coverage: "Service Area",
        aliases: ["Tampa"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/hillsborough-county"
    },

    "Pasco": {
        active: true,
        office: "Pasco County",
        coverage: "Service Area",
        aliases: [],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/pasco-county"
    },

    "Manatee": {
        active: true,
        office: "Bradenton",
        coverage: "Service Area",
        aliases: ["Bradenton"],
        services: [
            "Home Remodeling",
            "Kitchen Remodeling",
            "Bathroom Remodeling",
            "Roofing",
            "ADU Construction",
            "Commercial Construction"
        ],
        projects: "100+",
        button: "Learn More",
        url: "https://www.builtwithlovefl.com/service-areas/manatee-county"
    }

};
