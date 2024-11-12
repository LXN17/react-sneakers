import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://6724cf91c39fedae05b2d14a.mockapi.io/sneakers")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6724cf91c39fedae05b2d14a.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6724cf91c39fedae05b2d14a.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6724cf91c39fedae05b2d14a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header
        onRemoveItem={onRemoveItem}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div className="content">
        <div className="contentTop">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="img/search.svg" alt="" />
            <input
              onChange={onChangeSearchValue}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((val) => {
              return (
                <Card
                  title={val.title}
                  price={val.price}
                  imageUrl={val.imageUrl}
                  size={val.size}
                  key={val.id}
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
