/* https://flaviocopes.com/tailwind-setup/ */

const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-logical")({
      dir: "ltr",
    }),
    require("postcss-easy-import"),
    require("postcss-extend-rule"),
    require("postcss-custom-selectors"),
    require("postcss-custom-media"),
    require("postcss-media-minmax"),
    require("postcss-extend-rule"),
    require("tailwindcss"),
    process.env.NODE_ENV === "production"
      ? require("postcss-preset-env")({ stage: 1 }) &&
        cssnano({ preset: "default" })
      : null
  ],
};
