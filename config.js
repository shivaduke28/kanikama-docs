module.exports = {
    // I18n settings.
    // If you wanna add another language, add it below.
    // Use language code in ISO 639-1 format.
    languages: {
        en: "English",
        ja: "日本語"
    },
    mainLanguage: "en",

    // Default values for frontmatter data.
    // If you want to add custom data, add them below.
    frontmatter: {
        title: "KanikamaGI",
        description:
            "KanikamaGI is an asset providing lightmaps at runtime in VRChat, powered by UdonSharp.",
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
                    ["Instllation", "/getting-started/installation"],
                    ["Hello world", "/getting-started/hello-world"]
                ]
            ],
            [
                "System",
                null,
                [
                    ["How it works", "/system/how-it-works"],
                    ["How monitor works", "/system/how-monitor-works"],
                    ["Directional mode", "/system/directional-mode"],
                    ["Composition mode", "/system/composition-mode"],
                    ["Bakery", "/system/bakery"]
                ]
            ],
            [
                "Runtime",
                null,
                [
                    ["KanikamaSceneDescriptor", "/runtime/kanikama-scene-descriptor"],
                    ["KanikamaUnityLight", "/runtime/kanikama-unity-light"],
                    ["KanikamaUnitySkyLight", "/runtime/kanikama-unity-sky-light"],
                    ["KanikamaUnityRenderer", "/runtime/kanikama-unity-renderer"],
                    ["KanikamaMonitorController", "/runtime/kanikama-monitor-controller"],
                    ["KanikamaMonitorQuad", "/runtime/kanikama-monitor-quad"],
                ]
            ],
            [
                "Udon",
                null,
                [
                    ["KanikamaMapProvider", "/udon/kanikama-map-provider"],
                    ["KanikamaMapArrayProvider", "/udon/kanikama-map-array-provider"],
                    ["KanikamaColorCollector", "/udon/kanikama-color-collector"],
                    ["KanikamaCamera", "/udon/kanikama-camera"],
                    ["KanikamaRealtimeSceneLight", "/udon/kanikama-realtime-scene-light"],
                    ["KanikamaRealtimeCameraLight", "/udon/kanikama-realtime-camera-light"],
                ]
            ],
        ],
        ja: [
            ["About", "/ja"],
            [
                "Getting Started",
                null,
                [
                    ["Instllation", "/ja/getting-started/installation"],
                    ["Hello world", "/ja/getting-started/hello-world"]
                ]
            ],
            [
                "System",
                null,
                [
                    ["How it works", "/ja/system/how-it-works"],
                    ["How monitor works", "//jasystem/how-monitor-works"],
                    ["Directional mode", "/ja/system/directional-mode"],
                    ["Composition mode", "/ja/system/composition-mode"],
                    ["Bakery", "/ja/system/bakery"]
                ]
            ],
            [
                "Runtime",
                null,
                [
                    ["KanikamaSceneDescriptor", "/ja/runtime/kanikama-scene-descriptor"],
                    ["KanikamaUnityLight", "/ja/runtime/kanikama-unity-light"],
                    ["KanikamaUnitySkyLight", "/ja/runtime/kanikama-unity-sky-light"],
                    ["KanikamaUnityRenderer", "/ja/runtime/kanikama-unity-renderer"],
                    ["KanikamaMonitorController", "/ja/runtime/kanikama-monitor-controller"],
                    ["KanikamaMonitorQuad", "/ja/runtime/kanikama-monitor-quad"],
                ]
            ],
            [
                "Udon",
                null,
                [
                    ["KanikamaMapProvider", "/ja/udon/kanikama-map-provider"],
                    ["KanikamaMapArrayProvider", "/ja/udon/kanikama-map-array-provider"],
                    ["KanikamaColorCollector", "/ja/udon/kanikama-color-collector"],
                    ["KanikamaCamera", "/ja/udon/kanikama-camera"],
                    ["KanikamaRealtimeSceneLight", "/ja/udon/kanikama-realtime-scene-light"],
                    ["KanikamaRealtimeCameraLight", "/ja/udon/kanikama-realtime-camera-light"],
                ]
            ],
        ]
    },

    // Header links settings.
    // Please provide settings for all supported languages.
    header: {
        en: [["GitHub", "https://github.com/shivaduke28/kanikama"]],
        ja: [
            ["GitHub", "https://github.com/shivaduke28/kanikama"],
            ["About Me", "https://twitter.com/shiva_duke28"]
        ]
    }
};
