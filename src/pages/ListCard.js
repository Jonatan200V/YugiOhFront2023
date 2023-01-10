import React from "react";
import Card from "../components/cards/Card";
import Header from "../components/header/Header";
import useContextApp from "../Store/useContextApp";
import "./listcard.css";
const ListCard = () => {
  const store = useContextApp();
  const { cartas } = store;
  console.log(cartas);
  return (
    <div className="container__decards-div">
      <Header />
      <div className="contenedor__cartas">
        {cartas?.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default ListCard;
