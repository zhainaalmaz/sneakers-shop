import React from 'react';
import { ReactComponent as BtnRemovesvg } from '../../assets/icons/btn-remove.svg';
import { ReactComponent as Arrowsvg } from '../../assets/icons/arrowsvg.svg';
import classes from './Drawer.module.scss';
import axios from 'axios';
import { useCart } from '../hooks/useCart';
import Info from '../info/Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onCloseCart, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://620df95b20ac3a4eedced1bd.mockapi.io/orders',
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://620df95b20ac3a4eedced1bd.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };

  return (
    <div
      className={`${classes.overlay} ${opened ? classes.overlayVisible : ''}`}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        className={classes.drawer}
      >
        <h2 className=" d-flex justify-between mb-30 ">
          Корзина
          <BtnRemovesvg onClick={onCloseCart} className="removeBtn cu-p" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div>
                    <img className={classes.img} src={obj.imageUrl} alt="/" />
                  </div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <BtnRemovesvg
                    className="removeBtn"
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5}руб. </b>
                </li>
              </ul>
              <button
                className="greenButton"
                disabled={isLoading}
                onClick={onClickOrder}
              >
                Оформить заказ
                <Arrowsvg
                  style={{
                    margin: '-2px 20px',
                  }}
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderCompleted ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
