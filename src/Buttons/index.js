import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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