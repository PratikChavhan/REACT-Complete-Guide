# useRef



**useRef:** This hook is used for accessing Dom elements. And it retains mutable value without re-render.

Used with ref attribute for direct DOM interaction.

Can hold previous state or prop values.

Not limited to DOM references can hold any value.

Refs can be passed as props also.

## Interacting with useRef

```js
const countRef = useRef(0);
countRef.current+=1; // updating ref value
console.log(countRef.current); // printing ref value

```

Note: 
`npm install react-icons -save;`
`npm install bootstrap@latest`

## changes are made in AddTodo.jsx

1. create 2 variables using useRef
    ```js
      const todoNameElement = useRef();
      const dueDateElement = useRef();
    ```
2. Remove:
    - remove both the states
      ```js 
        const [todoName, setTodoName] = useState("");
        const [dueDate, setDueDate] = useState("");
      ```
    - replace onChange handler of inputs to ref attribute also remove value attribute.
    - remove both handlers
      ```js
        const handleNameChange = (event) => {
          setTodoName(event.target.value);
        };

        const handleDateChange = (event) => {
          setDueDate(event.target.value);
        };
      ```

***Summary:***  
> What actually happened?

At first, before changes UI was very heavily re-rendered bcoz of useState and onChange handler, after changes UI is now re-rendered only when form is submitted