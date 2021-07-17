import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: hsl(0, 0%, 100%);
    border: 0px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media(max-width:767px) {
        flex-direction: column;  
}
`;

export const Input = styled.input` 
    border: 2px solid hsl(0, 0%, 93%);
    padding: 10px;
    flex-grow: 1;
    margin: 10px;
`;

export const FormButton = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    padding: 10px;
    border: none;
    font-size: 15px;
    margin: 10px;
    cursor: pointer;
    transition: 0.5s linear;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);   
    }
`;