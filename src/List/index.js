import "./style.css";

const List = ({tasks, hideDoneTasks}) => (
  <ul className="section__field">
    {tasks.map(task => (
      <li key={task.id} className={`list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}>
        <button className="list__button list__button--done">
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__task${task.done ? " list__task--done" : ""}`}>
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑
            </button>
      </li>
    ))}
  </ul>
);

export default List;