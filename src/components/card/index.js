import React from 'react';
import classes from './Card.module.scss';
import { ReactComponent as BtnLikedsvg } from '../../assets/icons/btn-liked.svg';
import { ReactComponent as BtnCheckedsvg } from '../../assets/icons/btn-checked.svg';

const Card = (props) => {
  const onClickButton = () => {
    alert(props.title);
  };
  return (
    <div className={classes.card}>
      <BtnLikedsvg />
      <img src={props.imageUrl} width={133} height={112} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={classes.button}>
          <BtnCheckedsvg onClick={onClickButton} />
        </button>
      </div>
    </div>
  );
};

export default Card;
