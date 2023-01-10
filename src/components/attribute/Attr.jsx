import React from "react";

const Attr = ({ img, valor }) => {
  return (
    <div className="atributte__div-container">
      <img src={img} className="img__atributte" alt="attribute" />
      <span className="atributte__span">{valor}</span>
    </div>
  );
};

export default Attr;
