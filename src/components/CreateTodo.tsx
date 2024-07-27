import { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";
import { RootState } from "../redux/store";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState<string>("");

  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todo);

  const handleCreateTodo = () => {
    const newId = (todos as any[]).length + 1;

    if (newTodo.trim() !== "") {
      const payload: TodoType = {
        id: newId,
        content: newTodo,
      };
      dispatch(createTodo(payload));
      setNewTodo("");
    }
  };

  return (
    <div className="row col-md-6 mt-5 mx-auto">
      <div className="input-group">
        <input
          type="text"
          className="form-control border-2 border-warning"
          placeholder="Enter your todo.."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          value={newTodo}
        />
        <button
          onClick={handleCreateTodo}
          className="btn btn-outline-warning border-2"
        >
          <FaRegSave className="fs-4" />
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
