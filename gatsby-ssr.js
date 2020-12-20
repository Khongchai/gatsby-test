import React from 'react';
import {ThemeProvider, createGlobalStyle} from "styled-components";
import Theme from "./src/themes/theme";

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
        background-color: ${props => PushSubscriptionOptions.theme.colors.light1};
    }
`;

//This theme provider lets all components access the theme via props.theme
export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)