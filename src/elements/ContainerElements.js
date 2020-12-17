import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;

    /*
        Repeat(12, minmax(auto, 4.2rem)) is telling the browser 
        to create 12 grids in the middle with min width of auto and 
        max width of 4.2 rem each.

        Total grids in created by the line below = 14 grids.
    */
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;

    /* 
        Create four rows, with the fourth row taking up 
        the rest of the available space from the other three. 
    */
    grid-template-rows: 7.8 rem 20 rem 5 rem auto;
    grid: 0 2rem;

    @media ${props => props.theme.breakpoints.tablet}
    {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    @media ${props => props.theme.breakpoints.mobile}
    {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    }
`;