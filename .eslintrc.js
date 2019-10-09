module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:vue/recommended",
  ],
  rules: {
    // Disabled only on development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "off",

    // Eslint Rules
    "brace-style": "error",
    "nonblock-statement-body-position": [ "error", "below" ],
    "curly": [ "error", "all" ],
    "indent": [ "error", 2 ],
    "no-else-return": "error",
    "object-curly-spacing": [ "error", "always", {
      arraysInObjects: false,
      objectsInObjects: false,
    }],
    "array-bracket-spacing": [ "error", "always", {
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    "comma-dangle": [ "error", "always-multiline" ],
    "semi": [ "error", "always" ],

    // Vue Rules
    "vue/no-v-html": "off",
    "vue/order-in-components": "error",
    "vue/attributes-order": "error",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};