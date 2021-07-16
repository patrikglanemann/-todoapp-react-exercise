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

  function handleDeleteTodo(todoName) {
    const newTodos = todos.filter((todo) => todo.id !== todoName);
    setTodos(newTodos);
  }

  function handleDoneTode(todoIsDone) {
    if (!todoIsDone) {
      let todoClass = "Todo--done";
    }
  }

  function addTodo() {
    const newTodoList = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todoObject={todo}
          onDeleteClick={handleDeleteTodo}
          onDoneClick={handleDoneTode}
        />
      );
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

function Todo({ todoObject, onDeleteClick, onDoneClick }) {
  function handleDeleteClick() {
    onDeleteClick(todoObject.id);
  }

  function handleDoneClick() {
    onDoneClick(todoObject.isDone, todoObject.name);
  }

  let todoClassToggle;

  return (
    <li className={`Todo ${todoClassToggle}`}>
      <button onClick={handleDeleteClick}>X</button>
      <p>{todoObject.name}</p>
      <button onClick={handleDoneClick}>DONE</button>
    </li>
  );
}
