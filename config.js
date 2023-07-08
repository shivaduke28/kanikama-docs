module.exports = {
    // I18n settings.
    // If you wanna add another language, add it below.
    // Use language code in ISO 639-1 format.
    languages: {
        en: "English"
    },
    mainLanguage: "en",

    // Default values for frontmatter data.
    // If you want to add custom data, add them below.
    frontmatter: {
        title: "KanikamaGI",
        description: "KanikamaGI is a library to update lightmaps at runtime in Unity based on the Precumputed Radiance Transfer.",
        color: "#363227"
    },

    // Data for <meta> tags and PWA.
    meta: {
        name: "KanikamaGI",
        shortName: "Kanikama",
        url: "https://shivaduke28.github.io/kanikama-docs/",
        image: "/static/images/kanikama_logo.png",
        twitter: "@shiva_duke28",
        themeColor: "#363227",
        backgroundColor: "#000000"
    },

    // Sidebar links settings.
    // Please provide settings for all supported languages.
    sidebar: {
        en: [
            ["About", "/"],
            [
                "Getting Started",
                null,
                [
                    ["Instllation", "/GettingStarted/Installation"],
                    ["Hello world", "/GettingStarted/HelloWorld"]
                ]
            ],
            [
                "System",
                null,
                [
                    ["How it works", "/system/HowItWorks"],
                    ["How monitor works", "/system/how-monitor-works"],
                    ["Directional mode", "/system/DirectionalMode"],
                    ["Texture resizing", "/system/TextureResize"],
                ]
            ],
            [
                "Components",
                null,
                [
                    ["Outline", "/components/Outline"],
                    ["Setup monitors", "/components/SetupMonitor"],
                    ["Setup LTC", "/components/SetupLTC"],
                    ["AudioLink", "/components/AudioLink"]
                ]
            ],
        ],
    },

    // Header links settings.
    // Please provide settings for all supported languages.
    header: {
        en: [["GitHub", "https://github.com/shivaduke28/kanikama"]]
    }
};
