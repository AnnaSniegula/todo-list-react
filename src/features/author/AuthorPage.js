import StyledContainer from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Body } from "./styled";

export const AuthorPage = () => (
    <StyledContainer>
        <Header title="O autorze" />
        <Section title="Anna Śnieguła"
            body={<>
                <Body>
                    <p>Szukając nowych ścieżek zawodowych i rozwojowych wybrałam programowanie.
                        Tworzenie czegoś od początku, a przy tym obserwacja wizualnego efektu moich wysiłków sprawiają mi bardzo dużą satysfakcję. 🔥</p>
                    <p>Godziny spędzone przy komputerze równoważę aktywnością fizyczną.
                        Miesiące ciepłe spędzam na świeżym powietrzu. Lubię biegać, jeździć rowerem, spacerować w lesie i pływać kajakiem.
                        Resztę wolnego czasu pochłaniają mi pszczoły, które hodujemy wraz z mężem 🐝.
                        Czas jesienno-zimowy spędzam głównie w domu czytając książki, ćwicząc jogę i odlewając woskowe świece. Delektuję się przy tym miodem z własnej pasieki i miodem pitnym własnej produkcji. Na zdrowie! 🥃</p>
                </Body>
            </>}
        />
    </StyledContainer>
);

