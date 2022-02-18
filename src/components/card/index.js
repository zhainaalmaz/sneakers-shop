import React from 'react';
import classes from './Card.module.scss';
import { ReactComponent as BtnLikedsvg } from '../../assets/icons/btn-liked.svg';
import { ReactComponent as BtnCheckedsvg } from '../../assets/icons/btn-checked.svg';
import { ReactComponent as PlusBtnsvg } from '../../assets/icons/addBtn.svg';

const Card = ({ onFavorite, onPlus, title, imageUrl, price }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <BtnLikedsvg onClick={onFavorite} />
      </div>
      <img src={imageUrl} width={133} height={112} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {isAdded ? (
          <BtnCheckedsvg onClick={onPlus} />
        ) : (
          <PlusBtnsvg onClick={onClickPlus} />
        )}
      </div>
    </div>
  );
};

export default Card;
