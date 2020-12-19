import styled from "styled-components";

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet}
    {
        grid-column: 2 / span 6;
    }
`;

export const FooterSocialWrapper = styled.div`
    display: flex;

    //On smaller screens, wrap the elements and stack them on top of each other.
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    p
    {
        text-align: center;
        flex: 0 0 100%;
    }
`;
export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    img
    {
        height: 22px;
        padding: 0 1rem;
        transition: filter 0.3s ease, opacity 0.2s ease;
        opacity: 0.6;
    }

    img:hover, img:focus
    {
        opacity: 1 !important;
        filter: brightness(50%);
    }
`;
