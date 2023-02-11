module.exports = {
  space: true,
  prettier: true,

  extends: ["plugin:vue/vue3-recommended"],

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
