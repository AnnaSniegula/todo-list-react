import Section from "../../../common/Section";
import Header from "../../../common/Header";
import StyledContainer from "../../../common/Container";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Body } from "./styled";

export const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <StyledContainer>
            <Header title="Szczegóły zadania" />
           
                <Section
                    title={task ? task.content : "Nie znaleziono zadania"}
                    body={!!task && (
                        <Body>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </Body>
                    )}
                />
           
        </StyledContainer>
    );
};


