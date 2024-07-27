import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "../redux/store";
import { TodoType } from "../types/Types";

const TodoList = () => {

  const {todos} = useSelector((state:RootState) => state.todo);

  return (
    <div className="row col-md-6 mt-3 mx-auto">
      <ul className="list-group">
        {todos && todos.map((todo:TodoType)=>(
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
