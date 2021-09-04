import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({theme}) => theme.colors.white};
    border: 0px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media(max-width:${({theme}) => theme.breakpoints.mobile}px) {
        flex-direction: column;  
    }
`;

export const Input = styled.input` 
    border: 2px solid ${({theme}) => theme.colors.grey};
    padding: 10px;
    flex-grow: 1;
    margin: 10px;
`;

export const FormButton = styled.button`
    background-color: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white};
    padding: 10px;
    border: none;
    font-size: 15px;
    margin: 10px;
    cursor: pointer;
    transition: 0.5s linear;

    &:hover {
        filter: brightness(110%); 
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(130%); 
    }
`;