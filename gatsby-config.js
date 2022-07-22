module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      fallback: {
        fs: false,
      },
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
  ],
};
