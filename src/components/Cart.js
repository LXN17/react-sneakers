import React from "react";

const Cart = () => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="items">
          <div className="cartTop">
            <h2>
              Корзина
              <img src="/img/cartDelete.svg" alt="" />
            </h2>
            <div className="cartItem">
              <img className="sneakersImg" src="/img/sneakers/1.jpg" alt="" />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img className="deleteImg" src="/img/cartDelete.svg" alt="" />
              </button>
            </div>
            <div className="cartItem">
              <img className="sneakersImg" src="/img/sneakers/1.jpg" alt="" />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img className="deleteImg" src="/img/cartDelete.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="cartBottom">
            <ul className="cartTotalBlock">
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
            <button className="greenButton">
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
