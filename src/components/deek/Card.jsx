import Attribute from "../attribute/Attribute";

const Card = ({ card, handleClick }) => {
  return (
    <div className="container__right-container">
      <img
        src={card.image}
        alt={card.id}
        className="container__right-img"
        onClick={handleClick}
      />
      <div className="container__right-div">
        <h5 className="container__right-h5">{card.name}</h5>
        <span className="container__right-span">
          {card.atk ? `ATK:${card.atk} DEF:${card.def}` : ""}
        </span>
        <div className="conatainer__right-div-div">
          <Attribute attribute={card?.attribute} />
        </div>
      </div>
    </div>
  );
};

export default Card;
