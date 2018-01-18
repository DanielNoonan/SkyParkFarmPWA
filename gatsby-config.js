module.exports = {
  siteMetadata: {
    title: `Sky Park Farm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
    resolve: `gatsby-source-contentful`,
    options: {
        spaceId: `vs9k02isgfes`,
        accessToken: `1a7cb78dfe4130d9fb157cb5baee3130ccfc3f078d6a1ab7ba299ea0d8683b4e`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

