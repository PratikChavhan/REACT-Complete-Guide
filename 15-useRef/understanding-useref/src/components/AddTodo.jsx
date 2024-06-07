import { useState, useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(); // changes
  const dueDateElement = useRef();

  const handleAddButton = (event) => {
    console.log(event);
    event.preventDefault();
    // prevents the normal behaviour of submit event
    // otherwise form would have send the collected data to
    // localhost causing reload of the page
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    // resetting the input box
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
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
