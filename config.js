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
        color: "#00DDFF"
    },

    // Data for <meta> tags and PWA.
    meta: {
        name: "KanikamaGI",
        shortName: "Kanikama",
        url: "https://shivaduke28.github.io/kanikama-docs/",
        image: "/static/images/ogimage.png",
        twitter: "@shiva_duke28",
        themeColor: "#00DDFF",
        backgroundColor: "#000000"
    },

    // Sidebar links settings.
    // Please provide settings for all supported languages.
    sidebar: {
        en: [
            ["Home", "/"],
            ["Getting Started", "/getting-started"],
            [
                "Features",
                null,
                [
                    ["MDX", "/features/mdx"],
                    ["I18n", "/features/i18n"],
                    ["PWA", "/features/pwa"]
                ]
            ],
            [
                "Customize",
                "/customize",
                [["Config", "/customize/config"], ["Theme", "/customize/theme"]]
            ],
            ["How It Works", "/how-it-works"],
            ["FAQ", "/faq"]
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
