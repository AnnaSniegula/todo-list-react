import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    background-color: hsl(0, 0%, 100%);
    padding: 30px;
    margin: 0;
`;

export const Item = styled.li`  
    border-bottom: 1px solid hsl(0, 0%, 93%);
    display: grid;
    align-items: center;
    padding: 5px;
    grid-template-columns: auto 1fr auto;
    grid-gap: 15px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-all;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: hsl(0, 0%, 100%);
    margin: 5px;
    text-align: center;
    transition: 0.5s linear;

    ${({toggleDone}) => toggleDone && css`
    background-color: hsl(120, 100%, 25%);

        &:hover {
            background-color: hsl(120, 100%, 35%);
        }

        &:active {
            background-color: hsl(120, 100%, 25%);
        }

    `}

    ${({remove}) => remove && css`
    background-color: hsl(0, 100%, 50%);

        &:hover{
            background-color: hsl(0, 100%, 60%); 
        }

        &:active{
            background-color: hsl(0, 100%, 70%); 
        }

    `}

`;



