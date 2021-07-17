import "./TodoItem.css";

export default function Todo({ todoObject, onDeleteClick, onDoneClick }) {
  function handleDeleteClick() {
    onDeleteClick(todoObject.id);
  }

  function handleDoneClick() {
    onDoneClick(todoObject);
  }

  let todoClassToggle;
  if (todoObject.isDone) {
    todoClassToggle = "Todo--done";
  }

  return (
    <li className={`Todo ${todoClassToggle}`}>
      <button onClick={handleDeleteClick}>X</button>
      <p>{todoObject.name}</p>
      <button onClick={handleDoneClick}>DONE</button>
    </li>
  );
}
