import React from 'react';
import './App.css';
import { ReactComponent as SearchBlocksvg } from './assets/icons/searchBlock.svg';
import Card from './components/card';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://620df95b20ac3a4eedced1bd.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj, id) => {
    if (obj.id === id) {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onDeleteFromCart = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems({ filteredItems });
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onDelete={onDeleteFromCart}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <SearchBlocksvg style={{ marginTop: '14px' }} />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onFavorite={() => console.log('clicked fav button')}
              onPlus={(item) => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
