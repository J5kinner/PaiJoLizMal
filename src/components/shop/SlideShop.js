/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React, { useState } from "react";
import NoteEditor from "./NoteEditor.js";
import "../../assets/scss/components/Shop.scss";
import "../../assets/scss/components/Button.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const SlideShop = ({ user }) => {
  const intialIncome = user.coins;
  const [coins] = useState(intialIncome);

  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      <p>Current Balance: {coins}</p>
      {/* <ShopApp /> */}
      <div>
        <AwesomeSlider>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid red"
              editTitle="A wonderful Red note"
              theme="red"
            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid green"
              editTitle="A wonderful green note"
              theme="green"
            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid blue"
              editTitle="A wonderful blue note"
              theme="blue"
            />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default SlideShop;
