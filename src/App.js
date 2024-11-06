import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("https://6724cf91c39fedae05b2d14a.mockapi.io/sneakers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <div className="content">
        <div className="contentTop">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((val) => {
            return (
              <Card
                title={val.title}
                price={val.price}
                imageUrl={val.imageUrl}
                size={val.size}
                key={val.title}
                onPlus={(val) => onAddToCart(val)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
