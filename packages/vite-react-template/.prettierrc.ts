module.exports = {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    plugins: ["./node_modules/prettier-plugin-tailwindcss"],
    printWidth: 120,
    quoteProps: "as-needed",
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "all",
    importOrder: [
        "^vite",
        "^react",
        "pages/",
        "^antd",
        "<THIRD_PARTY_MODULES>",
        "components/",
        "hooks/",
        "utils/",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderGroupNamespaceSpecifiers: true,
    importOrderCaseInsensitive: true,
};
