import { useState } from "react";
import { StyledForm, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent);
    setNewTaskContent("");
  };


  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="form__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <FormButton className="form__button">Dodaj zadanie</FormButton>
    </StyledForm>
  )
};

export default Form;