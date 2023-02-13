module.exports = {
  space: true,
  prettier: true,

  plugins: ["tailwindcss", "vuejs-accessibility"],

  extends: [
    "plugin:tailwindcss/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vuejs-accessibility/recommended",
  ],

  extensions: ["vue"],

  globals: ["expect"],

  rules: {
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          pascalCase: true,
          camelCase: true,
        },
      },
    ],

    "tailwindcss/no-arbitrary-value": "off", // For daisyUI
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": ["error", { prependCustom: true }],
  },
};
