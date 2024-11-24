import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = ({
  id,
  title,
  imageUrl,
  price,
  size,
  onPlus,
  chosenSize,
  onSizeSelect,
  added = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);

  const onClickPlus = () => {
    if (chosenSize) {
      setIsAdded(!isAdded);

      onPlus({
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        size: chosenSize, // Передаем выбранный размер
      });
    } else {
      alert("Вы не выбрали размер!");
    }
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
            src={!isAdded ? "img/card/plus.svg" : "img/card/plusChecked.svg"}
            alt="plus"
          />
        </button>
      </div>
      <div className={cardStyles.cardSizes}>
        <span>Размеры:</span>
        <ul className={cardStyles.cardSizeItems}>
          {size.map((val) => (
            <button
              key={val}
              onClick={() => {
                onSizeSelect(id, val); // Передаем ID карточки и выбранный размер
              }}
              className={
                chosenSize === val
                  ? cardStyles.cardSizeItemChosen
                  : cardStyles.cardSizeItem
              }
            >
              {val + " ru"}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
