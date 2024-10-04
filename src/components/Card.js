import React from "react";

const Card = () => {
  return (
    <div className="card">
      <button className="favorite">
        <img src="img/heart.svg" alt="favorite" />
      </button>
      <img width={133} height={112} src="img/sneakers/1.jpg" alt="sneakers" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>ЦЕНА:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="addToCart">
          <img src="img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
