import ButtonDelete from "../ui/ButtonDelete";
import ButtonModificar from "../ui/ButtonModificar";

function Todo({ todo }) {
  return (
    <div className="todo flex">{todo.description && <p className="w-80">{todo.description}</p>} <ButtonDelete todo={todo} /><ButtonModificar todo={todo} /></div>
  );
}

export default Todo;
