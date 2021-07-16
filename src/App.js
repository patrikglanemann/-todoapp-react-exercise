import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddButtonClick(event) {
    event.preventDefault();
    const newTodo = event.target.todoInput.value;

    const newTodos = [
      ...todos,
      { id: Date.now(), name: newTodo, isDone: false },
    ];
    setTodos(newTodos);
  }

  function addTodo() {
    const newTodoList = todos.map((todo) => {
      return <Todo key={todo.id} todoText={todo.name} />;
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
