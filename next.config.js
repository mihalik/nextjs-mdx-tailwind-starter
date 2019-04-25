const emoji = require("remark-emoji");
const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    mdPlugins: [emoji],
  },
});
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "md", "mdx"],
    },
  ],
  [withCSS],
]);
