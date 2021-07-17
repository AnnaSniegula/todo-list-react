import { ButtonsContainer,Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone} className="buttons">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytkie
                </Button>
            </>
        )}
    </ButtonsContainer>
);

export default Buttons;