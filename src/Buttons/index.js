import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
                <button className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytkie
        </button>
            </>
        )}
    </div>
);

export default Buttons;