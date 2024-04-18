function ToDo() {

  function mandarTodo(event) {
    event.preventDefault();
    console.log("submit")
  }

  return (
    <div className="todo p-3">
      <form onSubmit={mandarTodo}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs p-2 bg-slate-800"
        />
        <input type="submit" value="Añadir" className="btn bg-slate-600 p-2 cursor-pointer" />
      </form>
    </div>
  );
}

export default ToDo;
