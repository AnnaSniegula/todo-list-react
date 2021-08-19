import styled from "styled-components";

export const ButtonsContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.teal};
    transition: color 0.3s;
    border: none;
    cursor: pointer;
   

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        flex-direction: column;
        padding: 10px;
        align-items: center;  
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({theme}) => theme.colors.darkGrey};
    }
`;