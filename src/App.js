import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [chosenSizes, setChosenSizes] = useState({}); // Для отслеживания размеров

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6724cf91c39fedae05b2d14a.mockapi.io/cart"
      );
      const itemsResponse = await axios.get(
        "https://6724cf91c39fedae05b2d14a.mockapi.io/sneakers"
      );

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);

      // Заполняем выбранные размеры из cartResponse
      const sizes = {};
      cartResponse.data.forEach((item) => {
        if (item.id && item.size) {
          sizes[item.id] = item.size;
        }
      });
      setChosenSizes(sizes);
    }

    fetchData();
  }, []);

  const onRemoveItem = async (id) => {
    try {
      // Удаляем элемент из бекенда
      await axios.delete(
        `https://6724cf91c39fedae05b2d14a.mockapi.io/cart/${id}`
      );

      // Удаляем элемент из локального состояния
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  // Функция для обработки выбора размера
  const handleSizeSelect = async (cardId, size) => {
    try {
      // Обновляем локальное состояние
      setChosenSizes((prev) => ({
        ...prev,
        [cardId]: size,
      }));

      // Опционально обновляем данные на сервере, если size хранится там
      await axios.put(
        `https://6724cf91c39fedae05b2d14a.mockapi.io/cart/${cardId}`,
        { size }
      );
    } catch (error) {
      console.error("Ошибка при обновлении размера:", error);
    }
  };

  const onAddToCart = (obj) => {
    const size = chosenSizes[obj.id];
    if (!size) {
      alert("Выберите размер перед добавлением в корзину!");
      return;
    }

    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://6724cf91c39fedae05b2d14a.mockapi.io/cart/${obj.id}`
      );

      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post(`https://6724cf91c39fedae05b2d14a.mockapi.io/cart/`, {
        ...obj,
        size, // Добавляем выбранный размер
      });

      setCartItems((prev) => [...prev, { ...obj, size }]);
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        onRemoveItem={onRemoveItem} // Передача функции в Header
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
                  key={val.id}
                  id={val.id}
                  title={val.title}
                  price={val.price}
                  imageUrl={val.imageUrl}
                  size={val.size}
                  onPlus={(val) => onAddToCart(val)}
                  chosenSize={chosenSizes[val.id]} // Передаем текущий выбранный размер
                  onSizeSelect={handleSizeSelect} // Передаем функцию для обновления размера
                  added={cartItems.some(
                    (obj) => Number(obj.id) === Number(val.id)
                  )}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
