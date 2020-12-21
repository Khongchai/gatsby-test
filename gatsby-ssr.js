import React from 'react';
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {MDXProvider} from "@mdx-js/react";
import {preToCodeBlock} from "mdx-utils";
import Theme from "./src/themes/theme";
import {Table, Code} from "./src/components";
import "./language-tabs.css";


const GlobalStyles = createGlobalStyle`
    *
    {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #gatsby-focus-wrapper
    {
        width: 100%;
        height: 100vh;
    }
    #__gatsby
    {
        width: 100%;
        height: 100vh;
    }


    body, html
    {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`;

//replace all HTML <table> elements with the <Table> component.
const components = 
{
    table: Table,
    //For code highlighting.
    pre: preProps => {
        const props = preToCodeBlock(preProps);
        if (props)
        {
            return <Code {...props}/>
        }
        return <pre{...preProps}/>
    },
    wrapper: ({children}) => <>{children}</>,

}

export const wrapRootElement = ({element}) => 
(
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles/>
            {element}
        </ThemeProvider>
    </MDXProvider>

);