import React from "react";
import cartStyles from "./Cart.module.scss";

const Cart = ({ cartOpen, setCartOpen }) => {
  return (
    <div
      className={cartOpen == true ? cartStyles.overlayOpen : cartStyles.overlay}
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
            <div className={cartStyles.cartItem}>
              <img
                className={cartStyles.sneakersImg}
                src="/img/card/sneakers/1.jpg"
                alt=""
              />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  className={cartStyles.deleteImg}
                  src="/img/cart/cartDelete.svg"
                  alt=""
                />
              </button>
            </div>
            <div className={cartStyles.cartItem}>
              <img
                className={cartStyles.sneakersImg}
                src="/img/card/sneakers/1.jpg"
                alt=""
              />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  className={cartStyles.deleteImg}
                  src="/img/cart/cartDelete.svg"
                  alt=""
                />
              </button>
            </div>
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
