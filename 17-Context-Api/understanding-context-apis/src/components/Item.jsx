import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const Item = ({ todoName, todoDate }) => {
  const contextObj = useContext(TodoItemsContext);
  const deleteItem = contextObj.deleteItem;

  // console.log("check");

  const handleDelete = () => {
    deleteItem(todoName, todoDate);
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={handleDelete}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
