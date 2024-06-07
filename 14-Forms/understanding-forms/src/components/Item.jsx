import { MdDeleteForever } from "react-icons/md";

const Item = ({ todoName, todoDate, onDeleteClick }) => {
  // console.log("check");
  const handleDelete = () => {
    onDeleteClick(todoName, todoDate);
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
