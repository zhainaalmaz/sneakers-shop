import './App.css';
import logo from './assets/images/image 4.png';
import userLogo from './assets/icons/userLogo.svg';
import basket from './assets/icons/basket.svg';
import { ReactComponent as AddToBasketsvg } from './assets/icons/addSvg.svg';
import sneakers1 from './assets/images/sneakers1.png';
import sneakers2 from './assets/images/sneakers2.png';
import sneakers3 from './assets/images/sneakers3.png';
import sneakers4 from './assets/images/sneakers4.png';
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img style={{ width: '40px', height: '40px' }} src={logo} alt="/" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src={basket} alt="/" />

            <span>1205$</span>
          </li>
          <li>
            <img src={userLogo} alt="/" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src={sneakers1} alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <AddToBasketsvg />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={sneakers2} alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <AddToBasketsvg />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={sneakers3} alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <AddToBasketsvg />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src={sneakers4} alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <AddToBasketsvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
