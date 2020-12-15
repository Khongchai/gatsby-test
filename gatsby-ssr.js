import React from 'react';
import {ThemeProvider, createGlobalStyle} from "styled-components";
import Theme from "./src/themes/theme";

const GlobalStyles = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
    }

    body, html
    {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => PushSubscriptionOptions.theme.colors.light1};
    }
`;
export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)