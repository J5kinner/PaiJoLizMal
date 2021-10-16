/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useState, useEffect } from "react";
import ShopItem from "./ShopItem";
import "../assets/scss/components/Shop.scss";
import "../assets/scss/components/Button.scss";

const Shop = ({ user }) => {
  const [items] = useState([
    { id: 1, title: "This is a red note", cost: 1, color: "red" },
    { id: 2, title: "This is a green note", cost: 50, color: "green" },
    { id: 3, title: "This is a blue note", cost: 51, color: "blue" },
  ]);

let [coins, setCoins] = useState(user.balance);
 
  /**
   * BuyHandler takes away the cost value from the balance
   * of the user and adds the item to the cart of the user
   *
   * @param userBalance - How much money the user has
   * @param id - id of the note being bought
   * @param color - color of the border
   * @param cost - cost of the purchase
   * @return the cost and colour of the chosen note being purchased
   */
  const handleBuy = (userBalance, id, cost, color) => {
      coins = userBalance;
    if (userBalance < cost) {
      alert("Sorry you don't have enough coins");
    } else {
      //update coins after purchase
      setCoins(coins - cost)
    //   console.log(coins - cost);
    }
    // console.log(userBalance + " minus " + cost + " Dollars  for " + color);
  };

  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      <p>Current Balance: {coins}</p>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <ShopItem title={item.title} cost={item.cost} color={item.color} />
            <button
              onClick={() =>
                handleBuy(user.balance, item.id, item.cost, item.color)
              }
              className="btn"
            >
              Buy{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
