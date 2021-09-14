import { TasksList, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";


const List = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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
            <Link to={toTask({ id: task.id })}>{task.content}</Link>
          </Content>
          <Button remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </TasksList >
  );

};
export default List;