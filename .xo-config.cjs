module.exports = {
  space: true,
  prettier: true,

  plugins: ["tailwindcss"],

  extends: ["plugin:tailwindcss/recommended", "plugin:vue/vue3-recommended"],

  extensions: ["vue"],

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
