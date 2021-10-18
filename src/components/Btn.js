import React from "react";
import "../assets/scss/components/Button.scss";

const Btn = (props) => {
  return (
    <button onClick={props.handler} className="btn-cancel">
      {props.text}
    </button>
  );
};

export default Btn;
