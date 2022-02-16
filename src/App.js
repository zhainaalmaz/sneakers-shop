import './App.css';
// import { ReactComponent as AddToBasketsvg } from './assets/icons/addSvg.svg';
import sneakers3 from './assets/images/sneakers3.png';
import sneakers1 from './assets/images/sneakers1.png';
import sneakers2 from './assets/images/sneakers2.png';
import sneakers4 from './assets/images/sneakers4.png';
import { ReactComponent as SearchBlocksvg } from './assets/icons/searchBlock.svg';
import Card from './components/card';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';

const arr = [
  {
    id: Math.random().toString(),
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    image: sneakers1,
    price: 12999,
  },
  {
    id: Math.random().toString(),
    title: 'Мужские Кроссовки Nike Air Max 270',
    image: sneakers2,
    price: 12999,
  },
  {
    id: Math.random().toString(),
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    image: sneakers3,
    price: 8499,
  },
  {
    id: Math.random().toString(),
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    image: sneakers4,
    price: 8999,
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <SearchBlocksvg />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.image}
              price={item.price}
              onClick={() => console.log(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
