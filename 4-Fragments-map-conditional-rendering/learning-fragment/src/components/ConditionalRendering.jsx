import React from "react";

function ConditionalRendering() {
  let foodItems = ["Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  // if-else
  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry</h3>;
  // }

  // Ternary operator
  // 1 way
  // let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry</h3> : null;

  // Logical operator
  // 1 way
  let emptyMessage = foodItems.length === 0 && <h3>I'm still hungry</h3>;

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}

      {/* Ternery operator 2nd way */}
      {foodItems.length === 0 ? <h3>I'm still hungry</h3> : null}
      {/* null won't get displayed on screen, as null is a falsy value
          falsy value => null, 0, empty, Nan, undefined
      */}

      {/* Logical operator 2nd way */}
      {foodItems.length === 0 && <h3>I'm still hungry</h3>}

      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ConditionalRendering;
