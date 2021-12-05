import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl, onPlus }) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded)
    };

    // useEffect(()=> {
    //     console.log('ss');
    // }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='img/icons/heart0.svg' alt='unliked' />
            </div>
            <img src={imageUrl} alt='sneakers' width={133} height={112} />
            <h5>{title}</h5>
            <div className={styles.card__footer}>
                <div className={styles.card__price}>
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? 'img/icons/added.svg' : 'img/icons/add.svg'} alt='add' />
            </div>
        </div>
    );
};

export default Card;
