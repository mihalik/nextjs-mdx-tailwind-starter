const tailwind = require("tailwindcss")("./tailwind.config.js");
const postcssEasyImport = require("postcss-easy-import");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./pages/**/*", "./components/**/*"],
});
const cssnano = require("cssnano");

let plugins = [postcssEasyImport, tailwind, autoprefixer];

// Don't purge or nano in dev mode because caching of output means newly
// used selectors won't get added to the output.
if (process.env.NODE_ENV === "production") {
  plugins = plugins.concat([purgecss, cssnano]);
}

module.exports = { plugins };
