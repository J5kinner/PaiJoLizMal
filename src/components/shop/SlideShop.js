/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React from "react";
import NoteEditor from "./NoteEditor.js";
import "../../assets/scss/components/Shop.scss";
import "../../assets/scss/components/Button.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const SlideShop = ({ user }) => {

  return (
    <div className="shop">
      <h3>Please select the note you would like to buy</h3>
      
      <div>

        <AwesomeSlider className="slider">
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid red"
              editTitle="A wonderful Red note"
              type="red"
              user={user}
              price="10"
            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid green"
              editTitle="A wonderful green note"
              type="green"
              user={user}
              price="20"

            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid blue"
              editTitle="A wonderful blue note"
              type="blue"
              user={user}
              price="30"

            />
          </div>
        </AwesomeSlider>

      </div>
    </div>
  );
};

export default SlideShop;
