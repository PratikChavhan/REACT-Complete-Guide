# Update state using functional updates

**Spread Operator**: Use to maintain
immutability when updating arrays or
objects.

**Functional Updates**: Use
`(existingPosts) [postData, ...existingPosts]`
to avoid stale values during asynchronous
updates.


Note: changes are made in App.jsx

line 42: replace this
```js
const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate },
      ];
setTodoItems(newTodoItems);
```

 with

```js
setTodoItems((currValue) => {
        const newTodoItems = [
          ...currValue,
          { name: itemName, dueDate: itemDueDate },
        ];
        return newTodoItems;
      });
```