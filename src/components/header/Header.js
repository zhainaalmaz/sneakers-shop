import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/image 4.png';
import userLogo from '../../assets/icons/userLogo.svg';
import basket from '../../assets/icons/basket.svg';
import likeBtn from '../../assets/icons/likesvg.svg';
import { useCart } from '../hooks/useCart';

const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img style={{ width: '40px', height: '40px' }} src={logo} alt="/" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src={basket} alt="Корзина" />

          <span>{totalPrice}</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="/favorites">
            <img src={likeBtn} alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src={userLogo} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
