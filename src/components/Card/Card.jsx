import React from 'react';
import styles from './Card.module.scss'


const Card = ({ title, price, imageUrl }) => {
    const onClickButton = () => {
        alert(title);
    };

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
                <button className={styles.btnAdd} onClick={onClickButton}>
                    <img src='img/icons/plus.svg' alt='add' width={11} height={11} />
                </button>
            </div>
        </div>
    );
};

export default Card;
