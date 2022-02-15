import './App.css';
// import { ReactComponent as AddToBasketsvg } from './assets/icons/addSvg.svg';
// import sneakers3 from './assets/images/sneakers3.png';
// import sneakers4 from './assets/images/sneakers4.png';
import { ReactComponent as SearchBlocksvg } from './assets/icons/searchBlock.svg';
// import { ReactComponent as BtnUnLikedsvg } from './assets/icons/btn-unliked.svg';
import Card from './components/card/Card';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
