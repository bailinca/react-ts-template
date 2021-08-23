/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
process.env.NODE_ENV = "test";

module.exports = {
  plugins: [require("@snowpack/web-test-runner-plugin")()],
};
