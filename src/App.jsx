import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app bg-gray-900 min-h-screen h-full text-gray-100 flex flex-wrap items-center justify-center py-5 px-5">
      <Header />
      <Home />
    </div>
  );
}

export default App;
