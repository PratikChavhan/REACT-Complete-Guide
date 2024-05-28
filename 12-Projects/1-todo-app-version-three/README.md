# Functionalities Added

1. Made Add button functional.
    - `AddTodo` and `TodoItems` are two different component & to share data we need to create a `useState` in parent, `const [todoItems, setTodoItems] = useState([]);`
    - create a behaviour `handleNewItem` which accepts two args `itemName, itemDueDate` from `AddTodo.jsx`
    - pass it via props `onNewItem` to `AddTodo.jsx`
    - create two states in `AddTodo.jsx`: name & date 
    - handle both the input tags with `onChange` event handler
    - handle add button with `onClick` event handler and pass states of both input to `onNewItem.jsx`
    - Now set the state of `todoItems`
2. When there are no todos then show welcome message.
    - Create a new component with only the welcome message as returning element
    - In App.jsx => `{todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}`
3. Delete Button deletes todo
    - create a behaviour `handleDeleteItem` which takes args `todoItemName, todoItemDueDate` in App.jsx
    - pass `handleDeleteItem` this via prop to TodoItems.jsx ==> Items.jsx
    - add `onClick` event on delete button and handle it using `handleDelete` and call `onDeleteClick()` pass name, dueDate as param
    - use filter to overwrite the array and update the state by removing the element.

## Extras

In App.js

  1. Check if dueDate is either current date or ahead of current date
  2. Check for duplicate entries
