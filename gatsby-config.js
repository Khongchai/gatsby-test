module.exports = {
  /* Your site config here */
  siteMetadata:
  {
    title: "Gatsby-Simple-Blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    //plugins for dealing with image optimization so that pages can be created dynamically.
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-mdx`,
      options: 
      {
        extensions: [ `.mdx`, `.md`],
        gatsbyRemarkPlugins: 
        [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 3840,
              quality: 100,
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rovoto mono`, 
          `muli\:400,400i,700,700i`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-styled-components`,
  ],
  
}
