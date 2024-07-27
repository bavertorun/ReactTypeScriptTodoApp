import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  return (
    <li className="list-group-item mb-2 border-2 bg-dark text-light border-warning d-flex justify-content-between">
          <div className="todo fw-bold">Spor Yapmak</div>
          <div className="actions" style={{cursor: 'pointer'}}>
            <MdDelete />
            <FaEdit className="mx-1" />
            <FaCheck />
          </div>
        </li>
  )
}

export default Todo