import React from "react";
import "./button.css";
const Boton = ({ valor, onClickEvent = null }) => {
  return (
    <button className="button__a" onClick={onClickEvent}>
      <span className="button__span" name="update">
        {valor}
      </span>
      <i className="button__i"></i>
    </button>
  );
};

export default Boton;
