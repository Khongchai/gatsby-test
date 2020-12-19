import styled from "styled-components";

export const NavWrapper = styled.nav`
    /*
        grid-column = <start from second column> / <spans right of length 12 columns> (from 2nd to 14th)
        grid-row = <start from the first row> / <spans down of length 1 row> (from first to second row)

        all rows and columns are relative to the parent's grid
    */
    grid-column: 2 /span 12;
    grid-row: 1 / span 1;
    display: flex;
    align-items: center;

    img
    {
        max-height: 30px;
    }
    
    @media ${props => props.theme.breakpoints.tablet}
    {
        grid-column: 2 / span 6;
    }

`;