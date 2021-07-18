import "./TodoItem.css";

export default function Todo({ todoObject, onDeleteClick, onDoneClick }) {
  function handleDeleteClick() {
    onDeleteClick(todoObject.id);
  }

  function handleDoneClick() {
    onDoneClick(todoObject);
  }

  let todoClassToggle, todoBtnClassToggle;
  if (todoObject.isDone) {
    todoClassToggle = "Todo--done";
    todoBtnClassToggle = "Todo_doneBtn--done";
  }

  return (
    <li className={`Todo ${todoClassToggle}`}>
      <button className="Todo__deleteBtn" onClick={handleDeleteClick}>
        X
      </button>
      <p className="Todo__text">{todoObject.name}</p>
      <button
        className={`Todo__doneBtn ${todoBtnClassToggle}`}
        onClick={handleDoneClick}
      >
        DONE
      </button>
    </li>
  );
}
