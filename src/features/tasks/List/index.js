import { TasksList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";


const List = ({ removeTask }) => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
return (
  <TasksList>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button toggleDone
          onClick={() => dispatch(toggleTaskDone(task.id))}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </TasksList >
);

};
export default List;