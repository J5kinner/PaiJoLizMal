/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useState } from "react";
import ShopItem from "./ShopItem";
import Btn from "../Btn";
import "../../assets/scss/components/Shop.scss";
import "../../assets/scss/components/Button.scss";

const Shop = ({ user }) => {
  const [items] = useState([
    { id: 1, title: "Red Note Title", cost: 1, color: "red" },
    { id: 2, title: "Green Note Title", cost: 50, color: "green" },
    { id: 3, title: "Blue Note Title", cost: 51, color: "blue" },
  ]);

  //TESTING MODE for coins
  let [coins, setCoins] = useState(50);

  //PRODUCTION CODE for coins generated from pomodoro
  //problem with returning money gives back weird values
  // let [coins, setCoins] = useState(user.coins);

  const [buyState, setBuyState] = useState("not-bought");

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
      setCoins(coins - cost);
      setBuyState("bought")
    }
  };


  const handleCancel = (userBalance, cost) => {
    const total = userBalance + cost;
    setCoins(total);
    setBuyState("not-bought")
  };

  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      <p>Current Balance: {coins}</p>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <ShopItem title={item.title} username={user.username} cost={item.cost} color={item.color} />
            <div>
              {buyState === "not-bought" && (
            <button
              onClick={() =>
                handleBuy(coins, item.id, item.cost, item.color)
              }
              className="btn"
            >
              Buy{" "}
            </button>)}
            {buyState === "bought" && <Btn handler={ () => handleCancel(coins, item.cost)} text="X"/>}
           
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
