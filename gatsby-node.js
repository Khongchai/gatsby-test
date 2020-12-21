exports.createPages = async function({actions, graphql})
{
  const {data} = await graphql(`
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
  `);

  //Create paginated pages for posts

  const postPerPage = 3;

  //how many pages should we have
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  //Create posts for the individual page based on their slug.
  data.allMdx.edges.forEach(edge => 
  {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/SinglePost.js`),
      context: {id},
    })
  });

  //create posts for the main page
  for (let i = 0; i < numPages; i++)
  {
    actions.createPage
    ({
      //Just checking if first item in the array, if first: set as index page.
      //If index should not be generated programmatically, just take away the ternary operator.
      path: i === 0? `/` : `/page${i+1}`,

      //the component we want "/" to be at
      component: require.resolve("./src/templates/AllPosts.js"),
      context: {
          limit: postPerPage, 
          skip: i * postPerPage, 
          numPages, 
          currentPage: i + 1,
      }
    });
  }



};

  