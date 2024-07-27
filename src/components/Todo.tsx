import { FaRegSave, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const { id, content } = todo;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUpdateTodo = () => {
    setEditable(false)
    const payload = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodoById(payload));
    setEditable(false);
  };

  return (
    <>
      <li className="list-group-item mb-2 border-2 bg-dark text-light border-warning d-flex justify-content-between">
        <div className="todo fw-bold">
          {editable ? (
            <input
              type="text"
              value={newTodo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewTodo(e.target.value)
              }
              className="bg-dark text-light border-0"
            />
          ) : (
            content
          )}
        </div>
        <div className="actions" style={{ cursor: "pointer" }}>
          {editable ? (
            <FaRegSave onClick={handleUpdateTodo} />
          ) : (
            <FaEdit onClick={() => setEditable(true)} />
          )}
          <MdDelete title="Sil" onClick={handleRemoveTodo} />
        </div>
      </li>
    </>
  );
};

export default Todo;
