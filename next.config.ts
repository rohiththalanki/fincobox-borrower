import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date',
          },
        ],
      },
    ];
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    appEnv: process.env.APP_ENV,
  },
  distDir: 'dist',
  output: 'standalone',
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
    yoda: "warn",
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
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      {
        "ts-expect-error": "allow-with-description",
      },
    ],
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
  },
};

export default nextConfig;
