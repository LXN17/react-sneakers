import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const arr = [
  // {
  //   title: "Мужские Кроссовки Nike Blazer Mid Suede",
  //   price: 12999,
  //   imageUrl: "1.jpg",
  //   size: [37, 38, 39, 40, 41, 42, 43],
  // },
  // {
  //   title: "Мужские Кроссовки Nike Air Max 270",
  //   price: 15600,
  //   imageUrl: "1.jpg",
  //   size: [37, 38, 39, 40, 41],
  // },
];
function App() {
  let [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://6724cf91c39fedae05b2d14a.mockapi.io/sneakers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      <Header />
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
