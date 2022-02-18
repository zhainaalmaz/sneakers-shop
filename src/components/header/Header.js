import React from 'react';
import logo from '../../assets/images/image 4.png';
import userLogo from '../../assets/icons/userLogo.svg';
import basket from '../../assets/icons/basket.svg';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img style={{ width: '40px', height: '40px' }} src={logo} alt="/" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul onClick={props.onClickCart} className="d-flex">
        <li className="mr-30 cu-p">
          <img src={basket} alt="/" />

          <span>12 999 руб.</span>
        </li>
        <li>
          <img src={userLogo} alt="/" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
