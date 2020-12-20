import styled from "styled-components";

export const FeatureImageWrapper = styled.div`
    //Start from grid 3 with length of 10.
    grid-column: 3 / span 10;

    //Start from grid 2 end at grid 4, same as grid-row: 2 / span 2.
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet}
    {
        grid-column: 2 / span 6;
    }
`;