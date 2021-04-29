const colors = {
    green: '#00aa13',
    blue: '#00aed6',
    red: '#ee2737',
    dark: '#182430',
    lightgreen: '#bada55'
}

window.config = {
    id: {
        author: "@ardodeardo",
        function: "Front End Dev",
        notes: "Uncomment some code to see results"
    },
    colors: { ...colors },
    theme: {
        green: `background: ${ colors.dark }; color: ${ colors.green }; text-decoration: underline;`,
        lightgreen: `background: ${ colors.dark }; color: ${ colors.lightgreen }; text-decoration: underline;`,
        blue: `background: ${ colors.dark }; color: ${ colors.blue }`,
        red: `background: ${ colors.dark }; color: ${ colors.red }`,
    }
}

console.table(config.id);