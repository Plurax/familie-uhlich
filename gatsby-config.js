/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    pathPrefix: `gatsby-starter-orga`,
    siteMetadata: {
        title: `Familie Uhlich`,
        description: `Entry`,
        author: `Christoph Uhlich <christoph@familie-uhlich.de>`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}`,
                name: 'tempfiles',
                ignore: [`**/\.\#**`]
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`
        }
],
}
