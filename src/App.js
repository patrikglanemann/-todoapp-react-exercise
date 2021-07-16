import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleButtonClick() {
    const newTodo = "Miau";
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function addTodo() {
    const newTodoList = todos.map((todo) => {
      return <Todo todoText={todo} />;
    });
    return newTodoList;
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <input type="text"></input>
      <button onClick={handleButtonClick}>Add</button>
      <ul>{addTodo()}</ul>
    </div>
  );
}

export default App;

function Todo() {
  return (
    <li>
      <button>X</button>
      <p>Hello</p>
      <button>DONE</button>
    </li>
  );
}
