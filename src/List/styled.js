import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    background-color: ${({theme}) => theme.colors.white};
    padding: 30px;
    margin: 0;
`;

export const Item = styled.li`  
    border-bottom: 1px solid ${({theme}) => theme.colors.grey};
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
    color: ${({theme}) => theme.colors.white};
    margin: 5px;
    text-align: center;
    transition: 0.5s linear;

    ${({toggleDone}) => toggleDone && css`
    background-color: ${({theme}) => theme.colors.green};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(130%); 
        }
    `}

    ${({remove}) => remove && css`
    background-color: ${({theme}) => theme.colors.red};

        &:hover {
            filter: brightness(110%);

        &:active {
            filter: brightness(150%); 
        }
    `}
`;



