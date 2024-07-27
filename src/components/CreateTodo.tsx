import { FaRegSave } from "react-icons/fa";

const CreateTodo = () => {
  return (
    <div className="row col-md-6 mt-5 mx-auto">
      <div className="input-group">
        <input
          type="text"
          className="form-control border-2 border-warning"
          placeholder="Enter your todo.."
        />
        <button className="btn btn-outline-warning border-2">
          <FaRegSave className="fs-4" />
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
