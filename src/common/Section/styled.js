import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: 10px;
`;

export const Header = styled.header`  
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    border-bottom: 2px solid ${({theme}) => theme.colors.grey};
    align-items: center;
    padding: 20px;


    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;  
    }
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    margin-bottom: 2px;

    ${({tasks}) => tasks && css`
        font-size: 20px;
        font-weight: bold;
        padding: 0px 20px;
    `}
`;