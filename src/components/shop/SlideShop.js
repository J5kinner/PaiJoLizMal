/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useState } from "react";
import ShopItem from "./ShopItem";
import Btn from "../Btn";
import NoteEditor from "./NoteEditor.js";

import "../../assets/scss/components/Shop.scss";
import "../../assets/scss/components/Button.scss";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SlideShop = ({ user }) => {
  const [items] = useState([
    { id: 1, title: "Red Note Title", cost: 1, color: "red" },
    { id: 2, title: "Green Note Title", cost: 50, color: "green" },
    { id: 3, title: "Blue Note Title", cost: 51, color: "blue" },
  ]);

  const intialIncome = user.coins;
  const [coins, setCoins] = useState(intialIncome);

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

  const shopList = [
    { id: 1, title: "Red Note Title", cost: 1, color: "red", isBought: false },
    {
      id: 2,
      title: "Green Note Title",
      cost: 50,
      color: "green",
      isBought: false,
    },
    {
      id: 3,
      title: "Blue Note Title",
      cost: 51,
      color: "blue",
      isBought: false,
    },
  ];

  const ShopApp = () => {
    const [list, setList] = React.useState(shopList);
    function handleToggleBuy(id, isBought, cost) {
      const userCoins = intialIncome;
      if (isBought) {
        const newCoins = userCoins + cost;
        setCoins(newCoins);

        console.log("selling, income: " + newCoins + " cost: " + cost);
      } else {
        const newCoins = userCoins - cost;

        setCoins(newCoins);

        console.log("Buying, income: " + newCoins + " cost: " + cost);
      }
      const newList = list.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            isBought: !item.isBought,
          };

          return updatedItem;
        }

        return item;
      });
      setList(newList);
    }

    return <List list={list} onToggleBuy={handleToggleBuy} />;
  };

  const List = ({ list, onToggleBuy }) => (
    <ul className="list">
      {list.map((item) => (
        <li key={item.id}>
          <ShopItem
            title={item.title}
            username={user.username}
            cost={item.cost}
            color={item.color}
          />
          {item.isBought ? (
            <button
              type="button"
              onClick={() => onToggleBuy(item.id, item.isBought, item.cost)}
            >
              {" "}
              X
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onToggleBuy(item.id, item.isBought, item.cost)}
            >
              {" "}
              Buy
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      <p>Current Balance: {coins}</p>
      {/* <ShopApp /> */}
      <AwesomeSlider>
        <div>
          {" "}
          <NoteEditor noteColor="5px solid red" editTitle="A wonderful Red note" />
        </div>
        <div>
          {" "}
          <NoteEditor noteColor="5px solid green" editTitle="A wonderful green note"/>
        </div>
        <div>
          {" "}
          <NoteEditor noteColor="5px solid blue"editTitle="A wonderful blue note" />
        </div>
        <div>4</div>
      </AwesomeSlider>
    </div>
  );
};

export default SlideShop;
