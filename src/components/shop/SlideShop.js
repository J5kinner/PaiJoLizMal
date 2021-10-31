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
import "../../assets/scss/components/Slider.scss";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import forestText from "../../assets/img/Forest_Focuser.svg";

const SlideShop = ({ user, setUserBalance }) => {
  return (
    <div className="shop">
      <div>
        <div className="overlay">
          <div className="text">CHOOSE your NOTE</div>
        </div>
        <AwesomeSlider className="slider">
          <div className="editor-red">
            <div className="editor">
              {" "}
              <NoteEditor
                editTitle={forestText}
                type="red"
                user={user}
                price="10"
                setBalance={setUserBalance}
              />
            </div>
          </div>

          <div className="editor-green">
            {" "}
            <div className="editor">

            <NoteEditor
              editTitle="A wonderful green note"
              type="green"
              user={user}
              price="20"
              setBalance={setUserBalance}
            />
          </div>
          </div>
          <div className="editor-blue">
            {" "}
            <div className="editor">

            <NoteEditor
              editTitle="A wonderful blue note"
              type="blue"
              user={user}
              price="30"
              setBalance={setUserBalance}
            />
          </div>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default SlideShop;
