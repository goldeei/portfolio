// eslint.config.mjs
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Load tailwind config using require-style path
const tailwindConfigPath = join(__dirname, "tailwind.config.ts");

const config = [
  {
    ignores: ["**/node_modules/*", "**/dist/*", "**/build/*", ".next/*"],
  },
  // Next.js recommended configs first
  ...compat.extends("next/core-web-vitals"),
  // Additional recommended configs
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ),
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      next: {
        rootDir: __dirname,
      },
      tailwindcss: {
        callees: ["classnames", "clsx", "cn"],
        configPath: tailwindConfigPath,
        cssFiles: [
          "**/*.css",
          "!**/node_modules",
          "!**/.*",
          "!**/dist",
          "!**/build",
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [],
        classRegex: "^class(Name)?$",
      },
    },
    rules: {
      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error", // Use next/image instead
      "@next/next/no-sync-scripts": "error",

      // Disable base ESLint rules that conflict with TypeScript
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-redeclare": "off",
      "no-use-before-define": "off",

      // Enable TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          classes: true,
          variables: true,
        },
      ],

      // React rules - some are handled by next/core-web-vitals
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Use TypeScript for prop validation
      "react/no-unescaped-entities": "off", // Often triggers false positives
      'react/no-unknown-property': [
    'warn',
    {
      ignore: [
        // Add Three.js properties here
        'rotation', 
        'position', 
        'scale',
        // Add other Three.js properties as needed
      ],
    },
  ],

      // Import rules
      "import/prefer-default-export": "off",
      "import/no-default-export": "off",

      // Tailwind rules
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "warn",
      "tailwindcss/enforces-shorthand": "warn",

      // Common rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

export default config;
