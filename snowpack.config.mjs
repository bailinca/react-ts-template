/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  buildOptions: {
    jsxInject: "import React from 'react'",
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
  },
  devOptions: {
    port: process.env.NODE_ENV === "test" ? 8081 : 8080,
  },
  alias: {
    // Type 1: Package Import Alias
    // react: 'preact/compat',
    // Type 2: Local Directory Import Alias (relative to cwd)
    // components: './src/components',
    src: "./src",
  },
  packageOptions: {
    knownEntrypoints: ["react-is"],
  },
  env: {
    API_MOCKING: false,
  },
};
