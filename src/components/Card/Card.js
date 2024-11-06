import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(true);
  const [IsFavorite, setIsFavorite] = useState(true);
  const [ChosenId, setChosenId] = useState();

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    props.onPlus({
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      size: props.size,
    });
  };

  const onClickFavorite = () => {
    setIsFavorite(!IsFavorite);
  };
  return (
    <div className={cardStyles.card}>
      <button className={cardStyles.favorite} onClick={onClickFavorite}>
        <img
          src={IsFavorite ? "img/card/heart.svg" : "img/card/heartFavorite.svg"}
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
              <button
                key={val}
                onClick={() => {
                  setChosenId(val);
                }}
                className={
                  ChosenId === val
                    ? cardStyles.cardSizeItemChosen
                    : cardStyles.cardSizeItem
                }
              >
                {val + " ru"}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
