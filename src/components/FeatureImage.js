import React from "react";
import Img from "gatsby-image";
import {useStaticQuery,graphql} from "gatsby";
import {FeatureImageWrapper} from "../elements";

export const FeatureImage = ({fixed}) => 
{
     
    const data = useStaticQuery(graphql`
        query{
            imageSharp(fixed: {originalName: {eq:"banner1.jpg"}})
            {
                fixed(width: 3840, quality: 100)
                {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
            }
        }
    `);
    
    //If there is a passed in "fixed" then load that, else load the fallback "banner1.jpg"
    return (
        <FeatureImageWrapper>
            
            <Img
                fixed={fixed?fixed: data.imageSharp.fixed} style={{position: "absolute", width: "100%", height: "100%", left: 0, top: 0}}
            />
            
        </FeatureImageWrapper>
    );
}