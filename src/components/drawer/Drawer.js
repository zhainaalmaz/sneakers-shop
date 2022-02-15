import React from 'react';
import sneakers1 from '../../assets/images/sneakers1.png';
import { ReactComponent as BtnRemovesvg } from '../../assets/icons/btn-remove.svg';
import { ReactComponent as Arrowsvg } from '../../assets/icons/arrowsvg.svg';

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        className="drawer"
      >
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина <BtnRemovesvg className="removeBtn cu-p" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src={sneakers1}
              alt="sneakers1"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <BtnRemovesvg className="removeBtn" />
          </div>

          <div className="cartItem d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src={sneakers1}
              alt="sneakers1"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <BtnRemovesvg className="removeBtn" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <Arrowsvg
              style={{
                margin: '-2px 20px',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
