import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = ({ id, title, imageUrl, price, size, onPlus }) => {
  const [isAdded, setIsAdded] = useState(true);
  const [ChosenId, setChosenId] = useState();

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({
      id: id,
      title: title,
      imageUrl: imageUrl,
      price: price,
      size: size,
    });
  };

  return (
    <div className={cardStyles.card}>
      <img
        width={133}
        height={112}
        src={"img/card/sneakers/" + imageUrl}
        alt="sneakers"
      />
      <p>{title}</p>
      <div className={cardStyles.cardBottom}>
        <div className={cardStyles.cardPrice}>
          <span>ЦЕНА:</span>
          <b>{price} руб.</b>
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
          {size.map((val) => {
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
