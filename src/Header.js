import "./Header.css";

export default function Header({ onAddButtonClick }) {
  return (
    <header className="Header">
      <h1>Todo:</h1>
      <form onSubmit={onAddButtonClick}>
        <input type="text" name="todoInput" id="todoInput"></input>
        <button>Add</button>
      </form>
    </header>
  );
}
