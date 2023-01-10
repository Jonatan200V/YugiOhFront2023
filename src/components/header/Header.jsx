import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Filter from "../filterSearch/Filter";
import { listCard, deek, tendeciaDeek } from "./icon.js";
const Header = () => {
  return (
    <div className="header">
      <div>
        <Filter />
      </div>
      <div>
        <Link to="/home" className="link__home" title="Home">
          <div className="link__div">
            <img className="header__img" src="../assets/logo.png" />
          </div>
        </Link>
      </div>
      <div className="contenedor__de-linkss">
        <Link to="/listcard" className="link__svg" title="Lista de Cartas">
          {listCard}
        </Link>
        <Link to="/deek" className="link__svg-deek" title="Mi Deek">
          {deek}
        </Link>
        <Link
          to="/deek/tendencies"
          className="link__svg-deek-tendencia"
          title="Deeks en Tendencias"
        >
          {tendeciaDeek}
        </Link>
        <Link to="/favorits" className="link__svg" title="Cartas Favoritas">
          {listCard}
        </Link>
        <Link to="/duelos" className="link__svg" title="Duelo">
          <img src={"../assets/icons/sword.png"} alt="Match" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
