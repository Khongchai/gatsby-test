import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { H1 } from "../elements";
import { Container, Post, FeatureImage } from "../components";


//Note: The result of the query is automatically inserted into your React component on the data prop. 
//GraphQL and Gatsby let you ask for data and then immediately start using it.
const SinglePost = ({data}) => 
{
    const featureImage = data.mdx.frontmatter.childImageSharp.fixed;

    return(
        <Container>
            <FeatureImage fixed={featureImage} />
            <Post>
                <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>
    )
}

export default SinglePost;

export const pageQuery = graphql`
    query SinglePostQuery($id: String!)
    {
        mdx(id: {eq: $id}) 
        {
            body
            frontmatter 
            {
                date
                excerpt
                slug
                title
                featureImage 
                {
                    childImageSharp 
                    {
                        fixed 
                        {
                            base64
                            tracedSVG
                            aspectRatio
                            srcWebp
                            srcSetWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`;
