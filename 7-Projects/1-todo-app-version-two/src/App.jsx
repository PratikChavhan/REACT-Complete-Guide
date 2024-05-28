import TodoItems from "./components/TodoItems";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2023",
    },
    {
      name: "Buy Notebook",
      dueDate: "05/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
