import TodoItems from "./components/TodoItems";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "04/10/2023",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(itemName, itemDueDate);

    // Check if dueDate is either current date or ahead of current date
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    // Months are zero-indexed, so January is 0
    const year = currentDate.getFullYear();
    const formattedCurrentDate = `${year}-${month}-${day}`; // itemDueDate => yyyy-mm-dd

    if (itemDueDate < formattedCurrentDate) {
      alert("Please select Current/Upcoming date");
      return; // Exit function if dueDate is not valid
    }

    // Check for duplicate entries
    const duplicate = todoItems.some(
      (item) => item.name === itemName && item.dueDate === itemDueDate
    );

    if (duplicate) {
      alert("Todo already exists!");
    } else {
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate },
      ];
      setTodoItems(newTodoItems);
    }
  };

  const handleDeleteItem = (todoItemName, todoItemDueDate) => {
    // console.log("Item deleted:", todo);
    let newTodoItems = [...todoItems];
    newTodoItems = newTodoItems.filter(
      (item) =>
        !(item.name === todoItemName && item.dueDate === todoItemDueDate)
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
