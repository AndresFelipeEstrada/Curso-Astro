module.exports = {
  extends: [
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      processor: "astro/client-side-ts", 
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module", // Set the source type to 'module'
        ecmaVersion: "latest", // Enable the latest ECMAScript features
        extraFileExtensions: [".astro"],
      },
      "env": {
        "es10": true
    },
      rules: {
    
      },
    },
  ],
}