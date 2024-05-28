import FoodItem from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    console.log(`${item} bought`);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem
          key={item}
          food={item}
          handleBuyButton={(event) => onBuyButton(item, event)}
          bought={activeItems.includes(item)}
        ></FoodItem>
      ))}
    </ul>
  );
};

export default FoodItems;
