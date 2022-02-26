import React from 'react';
import classes from './Card.module.scss';
import { ReactComponent as BtnLikedsvg } from '../../assets/icons/btn-liked.svg';
import { ReactComponent as BtnCheckedsvg } from '../../assets/icons/btn-checked.svg';
import { ReactComponent as PlusBtnsvg } from '../../assets/icons/addBtn.svg';
import { ReactComponent as UnlikeBtnsvg } from '../../assets/icons/btn-unliked.svg';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickedFav = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={classes.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={classes.favorite} onClick={onClickedFav}>
              {isFavorite ? <BtnLikedsvg /> : <UnlikeBtnsvg />}
            </div>
          )}
          <img src={imageUrl} width={133} height={112} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <div onClick={onClickPlus}>
                {isItemAdded(id) ? <BtnCheckedsvg /> : <PlusBtnsvg />}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
