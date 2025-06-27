module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: '475px'
            },
            colors: {
                "light-dark": "#2B2E4A",
                "light-light": "#F4EEFF",
                "dark-dark": "#393E46",
                "dark-black": "#222831",
                "dark-light": "#EEEEEE",
            }
        },
    },
    plugins: [],
}
