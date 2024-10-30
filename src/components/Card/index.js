import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(true);
  const [isfavorite, setIsFavorite] = useState(true);
  const [isChosen, setIsChosen] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    console.log(isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isfavorite);
    console.log(isfavorite);
  };
  return (
    <div className={cardStyles.card}>
      <button className={cardStyles.favorite} onClick={onClickFavorite}>
        <img
          src={isfavorite ? "img/card/heart.svg" : "img/card/heartFavorite.svg"}
          alt="favorite"
        />
      </button>
      <img
        width={133}
        height={112}
        src={"img/card/sneakers/" + props.imageUrl}
        alt="sneakers"
      />
      <p>{props.title}</p>
      <div className={cardStyles.cardBottom}>
        <div className={cardStyles.cardPrice}>
          <span>ЦЕНА:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={cardStyles.addToCart} onClick={onClickPlus}>
          <img
            src={isAdded ? "img/card/plus.svg" : "img/card/plusChecked.svg"}
            alt="plus"
          />
        </button>
      </div>
      <div className={cardStyles.cardSizes}>
        <span>Размеры:</span>
        <ul className={cardStyles.cardSizeItems}>
          {props.size.map((val) => {
            return (
              <li
                key={val}
                onClick={() => {
                  setIsChosen(!isChosen);
                  console.log(isChosen);
                }}
                className={
                  isChosen
                    ? cardStyles.cardSizeItemChosen
                    : cardStyles.cardSizeItem
                }
              >
                {val + " ru"}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
