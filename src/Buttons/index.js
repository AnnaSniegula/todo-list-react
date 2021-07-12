import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    onClick={setAllDone}
                    className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;