import React from "react";
import cartStyles from "./Cart.module.scss";

const Cart = ({
  chosenId,
  cartOpen,
  setCartOpen,
  onRemoveItem,
  cartItems = [],
}) => {
  return (
    <div
      className={
        cartOpen === true ? cartStyles.overlayOpen : cartStyles.overlay
      }
    >
      <div className={cartStyles.drawer}>
        <div className={cartStyles.items}>
          <div className={cartStyles.cartTop}>
            <h2>
              Корзина
              <img
                src="/img/cart/cartDelete.svg"
                alt=""
                onClick={() => {
                  setCartOpen(false);
                }}
              />
            </h2>

            {cartItems.length > 0 ? (
              cartItems.map((obj) => (
                <div key={obj.imageUrl} className={cartStyles.cartItem}>
                  <img
                    className={cartStyles.sneakersImg}
                    src={"/img/card/sneakers/" + obj.imageUrl}
                    alt=""
                  />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price + " руб."}</b>
                    {/* Отображение размера */}
                    {obj.size ? (
                      <b>Размер: {obj.size} RU</b>
                    ) : (
                      <b>Размер не выбран</b>
                    )}
                  </div>
                  <button>
                    <img
                      onClick={() => {
                        onRemoveItem(obj.id);
                      }}
                      className={cartStyles.deleteImg}
                      src="/img/cart/cartDelete.svg"
                      alt=""
                    />
                  </button>
                </div>
              ))
            ) : (
              <p>Корзина пуста</p>
            )}
          </div>
          <div className={cartStyles.cartBottom}>
            <ul className={cartStyles.cartTotalBlock}>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className={cartStyles.greenButton}>
              <div>
                Оформить заказ
                <img src="/img/cartArrow.svg" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
