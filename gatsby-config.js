module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
      resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/content/posts/blog`, 
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Ideate Blog `,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ideatedigital`,
      },
      {
        name: `github`,
        url: `https://github.com/samuelokediji`,
      },
    ],
  },
}
