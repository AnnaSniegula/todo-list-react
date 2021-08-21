import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispach = useDispatch();
    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispach(toggleHideDone()) } >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={setAllDone}
                      
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszytkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};


export default Buttons;