import { Header, StyledSection, StyledTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <StyledTitle tasks>{title}</StyledTitle>
            {extraHeaderContent}
        </Header>
        {body}
    </StyledSection>
);

export default Section;