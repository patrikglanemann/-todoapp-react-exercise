import "./App.css";
import { useState } from "react";

import Todo from "./TodoItem.";
import TodoList from "./TodoList";

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
    event.target.reset();
  }

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function handleDoneTode(todoObjectClicked) {
    const doneTodos = todos.map((todo) => {
      if (todo.id === todoObjectClicked.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(doneTodos);
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
