import React from "react";
import {graphql} from "gatsby";
import { Container, Content, ContentCard, FeatureImage, Pagination } from "../components";
import {H1, P} from "../elements";

//Note: The result of the query is automatically inserted into your React component on the data prop. 
//GraphQL and Gatsby let you ask for data and then immediately start using it.
const allPosts = ({pageContext, data}) =>
{
    const {currentPage, numPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    //If the previous page is page one, URL should be set to home ("/").
    const prevPage = currentPage - 1 === 1 ? "/": `/page${currentPage - 1}`;
    const nextPage = `/page${currentPage + 1}`;

    const posts = data.allMdx.edges;
    return(
        <Container>
            <FeatureImage/>
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    Once upon a time...
                </H1>
                <P color="dark2" textAlign="center">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                    aut fugit, sed quia consequuntur magni 
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
            />
        </Container>
    );
}

export default allPosts;


export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!)
    {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) 
        {
            edges 
            {
                node 
                {
                    frontmatter 
                    {
                        slug
                        title
                        date(formatString: "DD MMMM YYYY")
                        excerpt
                    }
                }
            }
        }

    }
`;


/*
Old index.js
import React from "react";
import { Container, FeatureImage, Content, ContentCard } from "../components";

export const IndexPage = () => 
{
  return(
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard date="20/12/2020" title="Test Title" excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis nobis eius recusandae rerum cum magnam perspiciatis vero ea voluptatum." slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage;



*/