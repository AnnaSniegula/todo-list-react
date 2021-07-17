import styled from "styled-components";

export const ButtonsContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: hsl(0, 0%, 100%);
    color: hsl(180, 100%, 25%);
    transition: color 0.3s;
    border: none;
    cursor: pointer;
   

    @media (max-width: 757px) {
        flex-basis: 100%;
        flex-direction: column;
        padding: 10px;
        align-items: center;  
    }

         &:hover {
        color: hsl(180, 100%, 35%); 
        }

        &:active {
        color: hsl(180, 100%, 40%);  
        }

        &:disabled {
        color: hsl(0, 0%, 80%);
        }
`;