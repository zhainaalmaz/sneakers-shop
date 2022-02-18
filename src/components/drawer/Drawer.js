import React from 'react';
import { ReactComponent as BtnRemovesvg } from '../../assets/icons/btn-remove.svg';
import { ReactComponent as Arrowsvg } from '../../assets/icons/arrowsvg.svg';
import classes from './Drawer.module.css';

const Drawer = ({ onCloseCart, items = [], onDelete }) => {
  const onDeleteItem = () => {
    onDelete();
  };
  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        className="drawer"
      >
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина
          <BtnRemovesvg onClick={onCloseCart} className="removeBtn cu-p" />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div>
                <img className={classes.img} src={obj.imageUrl} alt="/" />
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <BtnRemovesvg className="removeBtn" onClick={onDeleteItem} />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
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
