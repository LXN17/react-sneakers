import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <button className="favorite">
        <img src="img/card/heart.svg" alt="favorite" />
      </button>
      <img
        width={133}
        height={112}
        src={"img/card/sneakers/" + props.imageUrl}
        alt="sneakers"
      />
      <p>{props.title}</p>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>ЦЕНА:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="addToCart">
          <img src="img/card/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
