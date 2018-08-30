module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `m43r6g62i0hh`,
        accessToken: `25cd82da53611effc04e96dc0599aed83fb3150ba21c92c3797dc6377c66225c`,

      },
    }
  ]
}

