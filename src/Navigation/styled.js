import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color:${({ theme }) => theme.colors.white};
text-decoration: none;
font-size: 20px;

&.${activeClassName} {
    font-weight: bold;
}

&:hover {
    border-bottom: 1px solid;
}
`;

export const List = styled.ul`
background: ${({ theme }) => theme.colors.teal};
margin: 0;
padding: 0;
display: flex;
justify-content: center;
list-style: none;
font-family: 'Lato', sans-serif;
`;


export const Item = styled.li`
margin: 20px;
`;

