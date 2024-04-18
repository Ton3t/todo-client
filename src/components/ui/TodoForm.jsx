import axios from "axios";
import { useState } from "react";

function TodoForm() {

  const [description, setDescription] = useState("");

  async function savedTodo(event) {
    event.preventDefault();
    const todoData = {
      description: description ? description : undefined,
    };

    await axios.post("http://localhost:4567/todo", todoData);
    setDescription("");
  }

  return (
    <div className="todo m-3">
      <form onSubmit={savedTodo}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs p-2 mr-2 bg-slate-800 mb-2"
          value={description} onChange={(event) => setDescription(event.target.value)} />
        <input type="submit" value="Añadir" className="btn bg-slate-600 p-2 cursor-pointer" />
      </form>
    </div>
  );
}

export default TodoForm;
