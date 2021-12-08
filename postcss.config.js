module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    //---Remove extra CSS on Production start
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.vue", "./src/*.vue", "./public/index.html"],
        whitelist: [
          "sidebar-cart-open",
          "header-is-active",
          "body-is-active",
          "menu-mobile",
        ],
        whitelistPatternsChildren: [
          /^owl/,
          /^plp/,
          /^text/,
          /^home/,
          /^swiper/,
          /^slick/,
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    //---Remove extra CSS on Production End
  ],
};
