import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    ignores: [
      'dist/'
    ]
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off"
    }
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];