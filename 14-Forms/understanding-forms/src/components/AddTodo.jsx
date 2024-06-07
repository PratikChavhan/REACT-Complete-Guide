import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = (event) => {
    console.log(event);
    event.preventDefault(); // prevents the normal behaviour of submit event

    onNewItem(todoName, dueDate);
    // resetting the input box
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      {/* Changes */}
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <MdAssignmentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
