import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";


function App() {
  return (
    <div align="center" className="todo-container">
      <AppName></AppName>
      
      <div className="items-container">
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <div className="container">
          <div className="row kg-row">
            <div className="col-6">
              Go to college
            </div>
            <div className="col-4">
              14/05/2024
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger kg-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
