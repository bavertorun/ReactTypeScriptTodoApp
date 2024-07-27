import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="row col-md-6 mt-3 mx-auto">
      <ul className="list-group">
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </ul>
    </div>
  );
};

export default TodoList;
