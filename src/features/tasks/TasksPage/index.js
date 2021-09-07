import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "../Search";


export const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />
       <Section title="Wyszukiwarka"
        body={<Search />}
      />
      <Section title="Lista zadań"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};


