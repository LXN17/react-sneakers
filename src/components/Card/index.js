import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = (props) => {
  const [favoriteImageUrl, setFavoriteImageUrl] = useState(0);
  const [addToCartImageUrl, setAddToCartImageUrl] = useState("plus.svg");
  const favoriteImageUrlArr = [{ 0: "heart.svg" }, { 1: "heartFavorite.svg" }];
  return (
    <div className={cardStyles.card}>
      <button
        className={cardStyles.favorite}
        onClick={() => {
          setFavoriteImageUrl(!favoriteImageUrl);
          console.log(favoriteImageUrl);
        }}
      >
        <img
          src={"img/card/" + favoriteImageUrlArr[favoriteImageUrl]}
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
        <button
          className={cardStyles.addToCart}
          onClick={() => {
            setAddToCartImageUrl("plusChecked.svg");
          }}
        >
          <img src={"img/card/" + addToCartImageUrl} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
