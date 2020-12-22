module.exports = {
  siteMetadata:
  {
    title: "Gatsby-Simple-Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: "https://khongchai.io",
    image: "./banner1.jpg",
    twitterUsername: "@Khongchai",
    author: "Khongchai",
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
            resolve: `gatsby-remark-images`
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
