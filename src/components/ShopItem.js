import React from "react";
import Note from "./Note.js";
import "../assets/scss/components/Shop.scss";

const ShopItem = (props) => {
  return (
    <div className="shop-item-area">
      <Note color={props.color} />
      <div className="shop-item-area desc">
        <p>Description:{props.title}</p>
        <br />
        <p>Cost: ${props.cost}</p>
        <button href="/">Buy</button>
      </div>
    </div>
  );
};

export default ShopItem;
