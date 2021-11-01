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
import { ReactComponent as ChooseText } from '../../assets/img/Choose_your_Note.svg';
// import { ReactComponent as Zen } from '../../assets/img/Zen.svg';
// import { ReactComponent as Forest } from '../../assets/img/Forest.svg';
// import { ReactComponent as Racer } from '../../assets/img/Racer.svg';




const SlideShop = ({ user, setUserBalance }) => {

  return (
    <div className="shop">
      <div>
        <div className="overlay">
          <div className="text"><ChooseText /></div>
        </div>
        <AwesomeSlider className="slider">
          <div className="editor-red">
            <div className="editor">
              {" "}
              <NoteEditor
                svgTitle="Racer"
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
              svgTitle="Forest"
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
              svgTitle="Zen"
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
