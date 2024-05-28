import React from "react";

function FragmentNmap() {
  // Map Methods
  let foodItems = ["Green Veges", "Roti", "Salad", "Milk", "Ghee"];

  return (
    // Fragments: if there are more than one html entities returning from the function then it need to be wrapped.
    // ERROR: Adjacent JSX elements must be wrapped in an enclosing tag.
    // Previously we simply wrapped all returning entities in <div>...</div>. But this creates useless DOM nodes while rendering
    // React came up with react fragments to resolve
    // 2-Ways
    // 1. <React.Fragment>...</React.Fragments>
    // 2. <>...</>
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <li key="Dal" className="list-group-item">
          Dal
        </li>
        {/* render list from array data using map method */}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default FragmentNmap;
