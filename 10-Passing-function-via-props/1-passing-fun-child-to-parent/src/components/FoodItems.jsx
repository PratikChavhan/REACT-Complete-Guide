import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          food={item}
          handleBuyButton={() => console.log(`${item} bought!!!`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

// here we are passing two props to the <Item></Item>
// one is the item/food itself and other is the behaviour of the
// Buy button, which is defined in the Item.jsx
// This is done because, we are making Item.jsx independent from
// modification so that it can be implemented hastle free
// this is done because to club the modification under one file and not to
// scatter modification of component across multiple component.
// Thus, we learn the concept of passing function from child to parent via props.
