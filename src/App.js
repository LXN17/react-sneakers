import React, { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="wrapper clear">
      <Cart />
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
          <Card name="hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
