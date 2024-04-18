import axios from "axios";

function ButtonCheck({todo}) {

    async function checkTodo() {
        console.log("TODO- ACTUALIZANDO");
        await axios.put(`http://localhost:4567/todo/${todo._id}`)

    }
  return (
    <button className="btn btn-circle" onClick={checkTodo}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check cursor-pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
    </button>
  );
}

export default ButtonCheck;
