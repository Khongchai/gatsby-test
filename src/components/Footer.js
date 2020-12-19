import React from "react";
import {FooterWrapper, FooterSocialIcons, FooterSocialWrapper} from "../elements/FooterElements";
import {useStaticQuery, graphql} from "gatsby";

export const Footer = () => 
{
    const data = useStaticQuery(graphql`
        query{
            spotify: file(relativePath: {eq: "spotify.svg"})
            {
                publicURL
            }
            trello: file(relativePath: {eq: "trello.svg"})
            {
                publicURL
            }
            stack_overflow: file(relativePath: {eq: "stack_overflow.svg"})
            {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"})
            {
                publicURL
            }
        }
    `);
    return (
    <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.spotify.publicURL} alt="Spotify Logo"/>
                </a>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.stack_overflow.publicURL} alt="Stack Overflow Logo"/>
                </a>
                <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.trello.publicURL} alt="Trello Logo"/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter Logo"/>
                </a>
            </FooterSocialIcons>
            <p>Copyright 2020 Company. All right reserved.</p>
        </FooterSocialWrapper>
    </FooterWrapper>
    )
}