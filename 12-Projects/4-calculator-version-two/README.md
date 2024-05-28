*This is the final version of the app:*

**Functionalities added:**

  1. Clicking buttons will display the value in display window
      * define a state in App.jsx `const [calVal, setCalVal] = useState("");`
      * pass it to the display component using prop
      * make the display window read only
      * to draw the value of any button when clicked add `onClick` event handler to ButtonsContainer.jsx
      * `onClick={() => onButtonClick(btn)}` pass button value as argument to the prop, child to parent

  2. clicking arithmetic operators will calculate the experssion and show the result in display window
      * in App.jsx handle the `onButtonClick` 