import { useState, useEffect } from "react";
import TodoForm from "../ui/TodoForm";
import axios from "axios";
import Todo from "./Todo";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [todos]);

  async function getTodos() {
    const todoRes = await axios.get("http://localhost:4567/todo");
    setTodos(todoRes.data);
  }

  function renderTodosActivos() {
    let sortedTodos = [...todos];
    sortedTodos = sortedTodos.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    sortedTodos = sortedTodos.filter((todo) => {
      return todo.active == true;
    });

    return sortedTodos.map((todos, i) => {
      return <Todo key={i} todo={todos} getTodos={getTodos} />;
    });
  }

  function renderTodosAcabados() {
    let sortedTodos = [...todos];
    sortedTodos = sortedTodos.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    sortedTodos = sortedTodos.filter((todo) => {
      return todo.active == false;
    });

    return sortedTodos.map((todos, i) => {
      return <Todo key={i} todo={todos} getTodos={getTodos} />;
    });
  }

  return (
    <div className="home w-full h-screen flex p-2">
      <TodoForm />
      <section className="mr-4">
        <h1 className="text-center">TO-DO ACTIVOS</h1>
        {renderTodosActivos()}
      </section>
      <section className="bg">
        <h1 className="text-center">TO-DO FINALIZADO</h1>
        {renderTodosAcabados()}
      </section>
    </div>
  );
}

export default Home;
