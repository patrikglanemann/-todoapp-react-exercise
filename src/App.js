import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["FirstTodo"]);

  function handleAddButtonClick(event) {
    event.preventDefault();
    const newTodo = event.target.todoInput.value;
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
      <form onSubmit={handleAddButtonClick}>
        <input type="text" name="todoInput" id="todoInput"></input>
        <button>Add</button>
      </form>
      <ul>{addTodo()}</ul>
    </div>
  );
}

export default App;

function Todo({ todoText }) {
  function handleDeleteClick() {}

  return (
    <li>
      <button onClick={handleDeleteClick}>X</button>
      <p>{todoText}</p>
      <button>DONE</button>
    </li>
  );
}
