const path = require('path');

const siteUrl = `https://www.netlify.com/`

module.exports = {
  siteMetadata: {
    title: `Mutual`,
    description: `Description Mutual`,
    author: `Mutual`,
    siteUrl,
    social: {
      twitter: `schaudustin`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `vflplrzn`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    "gatsby-plugin-loadable-components-ssr",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
