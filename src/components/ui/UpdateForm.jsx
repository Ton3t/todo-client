import axios from "axios";
import { useState } from "react";

function UpdateForm({todo}) {
  const [description, setDescription] = useState("");

  async function updateTodo(event) {
    event.preventDefault();
    const todoData = {
      description: description ? description : undefined,
    };

    await axios.put(`http://localhost:4567/todo/description/${todo._id}`, todoData);
  }

  return (
    <form onSubmit={updateTodo}>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs p-2 mr-2 bg-slate-800 mb-2"
        value={todo.description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="submit"
        value="Actualizar"
        className="btn bg-slate-600 p-2 cursor-pointer"
      />
    </form>
  );
}

export default UpdateForm;
