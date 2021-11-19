import React from 'react';

const Card = () => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src='img/icons/heart0.svg' alt='unliked' />
            </div>
            <img src='img/sneakers/1.jpg' alt='sneakers' width={133} height={112} />
            <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
            <div className='card__footer'>
                <div className='card__price'>
                    <span>Ціна:</span>
                    <b>12 999 грн.</b>
                </div>
                <button className='btn-add'>
                    <img src='img/icons/plus.svg' alt='add' width={11} height={11} />
                </button>
            </div>
        </div>
    );
};

export default Card;
