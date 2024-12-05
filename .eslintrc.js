module.exports = {
  "extends": [
    "prettier",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    require.resolve("@vercel/style-guide/eslint/next"),
    "turbo",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "unused-imports",
    "notice",
    "import",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: "warn",
    eqeqeq: "error",
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports": "warn",
    "no-else-return": "warn",
    "no-lonely-if": "warn",
    "no-inner-declarations": "off",
    "no-unused-vars": "off",
    "no-useless-computed-key": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "object-shorthand": ["warn", "always"],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": ["warn", { AssignmentExpression: { array: true } }],
    "prefer-object-spread": "warn",
    "prefer-template": "warn",
    "spaced-comment": ["warn", "always", { markers: ["/"] }],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "+(modules){/**,}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "+(common|wrappers|layouts){/**,}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "+(icons|components|hooks){/**,}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "+(services){/**,}",
            group: "internal",
            position: "after",
          },
          {
            pattern: "+(store){/**,}",
            group: "internal",
            position: "after",
          },
        ],
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
}
