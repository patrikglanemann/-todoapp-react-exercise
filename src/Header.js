import "./Header.css";

export default function Header({ onAddButtonClick }) {
  return (
    <header className="Header">
      <h1>Todo:</h1>
      <form onSubmit={onAddButtonClick}>
        <input
          className="Header__input"
          type="text"
          name="todoInput"
          id="todoInput"
        ></input>
        <button className="Header__addBtn">Add</button>
      </form>
    </header>
  );
}
