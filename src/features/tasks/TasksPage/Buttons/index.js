import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectHideDone,
    selectAreAllTasksDone,
} from "../../tasksSlice";
import { ButtonsContainer, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);

    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={areAllTasksDone}
                    >
                        Ukończ wszytkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};


export default Buttons;