import React from 'react';
import { ReactComponent as BtnLikedsvg } from '../../assets/icons/btn-liked.svg';
import sneakers2 from '../../assets/images/sneakers2.png';
import { ReactComponent as BtnCheckedsvg } from '../../assets/icons/btn-checked.svg';

const Card = () => {
  return (
    <div className="card">
      <BtnLikedsvg />
      <img width={133} height={112} src={sneakers2} alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <BtnCheckedsvg />
        </button>
      </div>
    </div>
  );
};

export default Card;
