module.exports = {
  space: true,
  prettier: true,

  extends: ["plugin:vue/vue3-recommended"],

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
  },
};
