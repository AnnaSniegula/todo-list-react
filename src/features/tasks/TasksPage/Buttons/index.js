import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectAreAllTasksDone,
    selectIsAnyTaskDone
} from "../../tasksSlice";
import { ButtonsContainer } from "./styled";
import Button from "../Button";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);

    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())} 
                    disabled={!isAnyTaskDone}
                    >
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