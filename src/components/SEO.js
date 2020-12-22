import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

//if either of the props are not passed in, use the data.site.siteMetadata fallback
export const SEO = ({description, keywords, title, image, url, author}) =>
{
    //static query is used like a component while useStaticQuery have all the info below passed in as props.
    //For future projects, use the hook.
    return (
        <StaticQuery
            query={detailsQuery}
            render={data=>
                {
                    const metaDescription = description || data.site.siteMetadata.description;
                    const metaTitle = title || data.site.siteMetadata.title;
                    const metaAuthor = author || data.site.siteMetadata.author;
                    const metaURL = url || data.site.siteMetadata.url;
                    const metaImage = image || data.site.siteMetadata.image;
                    const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"];
                    return(
                        <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaTitle,
                            },
                            {
                                property: `og:url`,
                                content: metaURL,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                property: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                property: `twitter:creator`,
                                content: metaAuthor,
                            },
                            {
                                property: `twitter:title`,
                                content: `metaTitle`,
                            },
                            {
                                property: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                property: `twitter:image`,
                                content: metaImage,
                            },

                            ].concat
                                (
                                    metaKeywords && metaKeywords.length > 0 ?
                                    {
                                        name: `keywords`,
                                        content: metaKeywords.join(`, `)
                                    }: []
                                )
                            }
                        />
                    )
                }
            } 

        />

    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery
    {
        site
        {
            siteMetadata
            {
                title
                description
                author
                image
            }
        }
    }
`;
