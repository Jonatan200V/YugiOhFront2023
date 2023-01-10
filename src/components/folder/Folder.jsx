import React, { useState } from "react";
import Button from "../button/Button";
import "./folder.css";
const Folder = ({ card }) => {
  const [description, setDescription] = useState(false);
  const [des, setDes] = useState(card.description);
  const handleChange = (e) => {
    const value = e.target.value;
    setDes(value);
  };
  return (
    <div className="card">
      <h1 className="card__h1">{card.name}</h1>
      <img className="card__img" src={card.image} alt={card.name} />

      <div className="card__descripcion">
        <h2 className="card__h2">Descripcion</h2>
        <p className="card__p">
          {description ? (
            <textarea
              className="card__textarea"
              value={des}
              onChange={handleChange}
            />
          ) : (
            des
          )}
        </p>
      </div>
      <Button
        id={card.id}
        setDescription={setDescription}
        description={description}
        des={des}
      />
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
      <div className="folder"></div>
    </div>
  );
};

export default Folder;
