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

function renderTodos() {
  let sortedTodos = [...todos];
  sortedTodos = sortedTodos.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return sortedTodos.map((todos, i) => {
    return <Todo key={i} todo={todos} />;
  });
  
}

  return (
    <div className="home w-full h-screen p-2">
        <TodoForm />
        {renderTodos()}
        
    </div>
  )
}

export default Home;