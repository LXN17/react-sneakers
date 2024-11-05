import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "1.jpg",
    size: [37, 38, 39, 40, 41, 42, 43],
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "1.jpg",
    size: [37, 38, 39, 40, 41],
  },
];
function App() {
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
          {arr.map((val) => {
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
