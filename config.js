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
                    ["KanikamaArrayMapProvider", "/udon/kanikama-array-map-provider"],
                    ["KanikamaCamera", "/udon/kanikama-camera"],
                    ["KanikamaRealtimeSceneLight", "/udon/kanikama-realtime-scene-light"],
                    ["KanikamaRealtimeCameraLight", "/udon/kanikama-realtime-camera-light"],
                ]
            ],
        ],
        ja: [
            ["ホーム", "/ja"],
            ["使い方", "/ja/getting-started"],
            [
                "機能",
                null,
                [
                    ["MDX", "/ja/features/mdx"],
                    ["多言語対応", "/ja/features/i18n"],
                    ["PWA", "/ja/features/pwa"]
                ]
            ],
            [
                "カスタマイズ",
                "/ja/customize",
                [
                    ["設定ファイル", "/ja/customize/config"],
                    ["テーマ", "/ja/customize/theme"]
                ]
            ],
            ["仕組み", "/ja/how-it-works"],
            ["よくある質問", "/ja/faq"]
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
