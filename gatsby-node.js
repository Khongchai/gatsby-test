exports.createPages = async function({actions, graphql})
{
  const {data} = await graphql`
      query{
          allMdx(sort: {fields: frontmatter___date, order: DESC}) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                  id
                }
              }
            }
      }
  `;

  //Create paginated pages for posts

  const postPerPage = 3;

  const pagesToBeCreated = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPages({
          //Just checking if first item in the array, if first: set as index page.
          //If index should not be generated programmatically, just take away the ternary operator.
          path: i === 0? `/` : `/${i+1}`,
          component: requestAnimationFrame.resolve("./src/templates/allPosts.js"),
          context: {
              limit: postPerPage, 
              skip: i * postPerPage, 
              numPages, 
              currentPage: i + 1,
          }
      })
  });

  //Create blog posts one by one.
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.creatPages({
      path:SVGFESpotLightElement,
      component: requestAnimationFrame.resolve(`./src/templates/singlePosot.js`),
      context: {id},
    })
  });

};