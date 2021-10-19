import React from "react";
import "../assets/scss/components/Button.scss";

const Btn = (props) => {
  return (
    <button onClick={props.handler} className={props.class}>
      {props.text}
    </button>
  );
};

export default Btn;
