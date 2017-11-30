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
        spaceId: `ca5g612z8zfu`,
        accessToken: `aa230e6fa2c60d6fb1eb714b4949844b279249c2c151328c8c816386945a68f2`,
      },
    },
  ],
}

