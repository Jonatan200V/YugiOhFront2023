import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Attribute from "../attribute/Attribute";
const Card = ({ card }) => {
  return (
    <div className="card__list">
      <Link to={`/cartas/${card?.id}`} className="link">
        <div className="card__div">
          <img src={card?.image} alt={card?.name} className="card__list-img" />
          <div className="card__container-list">
            <h4 className="card__h4-list">{card?.name}</h4>
            <div className="card__description-list">
              <div className="card__intermedia">
                <span className="intermedia__attribute">
                  <Attribute attribute={card?.attribute} />
                </span>
                <span className="intermedia__nivel">
                  {card?.nivel ? (
                    `Nivel ${card?.nivel}`
                  ) : card?.speed === "rapido" ? (
                    <img
                      className="intermedia__img"
                      src="../assets/velocidad/playspeed.png"
                    />
                  ) : card?.speed === "equipo" ? (
                    <img
                      className="intermedia__img"
                      src="../assets/velocidad/equipo.png"
                    />
                  ) : card?.speed === "continua" ? (
                    <img
                      className="intermedia__img"
                      src="../assets/velocidad/continua.png"
                    />
                  ) : (
                    ""
                  )}
                </span>
                {card?.nivel ? (
                  <img
                    className="intermedia__img"
                    src="../assets/icon_level.png"
                  />
                ) : (
                  ""
                )}

                <span className="intermedia__monstruo">
                  {card?.monstruoattr
                    ? `[${card?.monstruoattr} / ${card?.monstruo}]`
                    : ""}
                </span>
              </div>
              <div className="intermedia__atk">
                <span className="intermedia__atkdef">
                  {card?.atk ? `ATK: ${card?.atk} DEF: ${card?.def}` : ""}
                </span>
              </div>
            </div>
            <p className="card__p-list">{card?.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
