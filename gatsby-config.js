require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `pankratzraceschool-v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        "projectId": "alegnslt",
        "dataset": process.env.NODE_ENV,
        "token": process.env.SANITY_TOKEN_V2,
        "watchMode": true
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "337902628"
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};