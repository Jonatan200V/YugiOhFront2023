import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useContextApp from "../../Store/useContextApp";

const Carta = ({ carta }) => {
  const imgRef = useRef();
  const store = useContextApp();
  const { addFavorits, deleteFavorits } = store;
  const handleClick = (e) => {
    if (imgRef.current.classList.contains("star")) {
      imgRef.current.classList.remove("star");
      return deleteFavorits(e.target.id);
    }
    imgRef.current.classList.add("star");
    addFavorits(e.target.id);
  };
  return (
    <div className="carta">
      <Link to={`/cartas/${carta.id}`}>
        <img className="carta__img" src={carta.image} alt={carta.name} />
      </Link>
      <div className="carta__name-container">
        <h1 className="carta__name">{carta.name}</h1>
        <button className="carta__button">
          <img
            id={carta.id}
            onClick={handleClick}
            src={"../assets/icon_level.png"}
            alt={carta.name}
            className="carta__img-img"
            ref={imgRef}
          />
        </button>
      </div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
      <div className="cuadrado"></div>
    </div>
  );
};

export default Carta;
