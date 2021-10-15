import React from "react";
import ShopItem from "./ShopItem";
import "../assets/scss/components/Shop.scss";

const items = [
  { id: 1, title: "This is a red note", cost: 1, color: "red" },
  { id: 2, title: "This is a green note", cost: 2, color: "green" },
  { id: 3, title: "This is a blue note", cost: 3, color: "blue" },
];


const buyHandler = (props) => {
    console.log("Buying a " + props + " note");

}

function Shop(props) {
  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <ShopItem title={item.title} cost={item.cost} color={item.color} />
        <button onClick={buyHandler(item.color)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
