export default function Header({ onAddButtonClick }) {
  return (
    <form onSubmit={onAddButtonClick}>
      <input type="text" name="todoInput" id="todoInput"></input>
      <button>Add</button>
    </form>
  );
}
