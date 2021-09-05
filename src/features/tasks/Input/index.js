import styled from "styled-components";

export default styled.input` 
border: 2px solid ${({theme}) => theme.colors.grey};
padding: 10px;
flex-grow: 1;
margin: 10px;
`;