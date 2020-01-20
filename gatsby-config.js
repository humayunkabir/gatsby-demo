/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    author: 'Humayun kabir',
    email: 'humayunkabir.cep@gmail.com',
    socials: {
      twitter: 'https://twitter.com/_humayunkabir',
      github: 'https://github.com/humayunkabir',
      gitlab: 'https://gitlab.com/humayunkabir',
      bitbucket: 'https://bitbucket.com/humayunkabir',
    },
    siteUrl: 'https://humayunkabir.github.io/gatsby',
    description: 'Blazing fast modern site generator for React',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
