import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState();

  function handleButtonClick() {
    setTodos("Miau");
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <input type="text"></input>
      <button onClick={handleButtonClick}>Add</button>
      <p>{todos}</p>
    </div>
  );
}

export default App;
