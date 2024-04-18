import ButtonDelete from "../ui/ButtonDelete";

function Todo({ todo }) {
  return (
    <div className="todo flex">{todo.description && <p>{todo.description}</p>} <ButtonDelete /></div>
  );
}

export default Todo;
