import React from 'react';

const Drawer = ({ onClose, onRemove, items = [] }) => {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>
                    Корзина <img onClick={onClose} src='/img/icons/btn-delete.svg' alt='delete' />
                </h2>

                {items.length > 0 ? (
                  <div>
                        <div className='items'>
                        {items.map((obj) => (
                            <div className='cartItem'>
                                <img width={70} height={70} src={obj.imgUrl} alt='Sneakers' />
                                <div className='cartSneakersBlok'>
                                    <p>{obj.title}</p>
                                    <b>{obj.price} грн.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className='removeBtn' src='/img/icons/btn-delete.svg' alt='delete' />
                            </div>
                        ))}
                    </div>
                     <div className='priceBlock'>
                     <ul>
                         <li className='priceBlockItem'>
                             <span>Всього:</span>
                             <div></div>
                             <b>21 498 грн.</b>
                         </li>
                         <li className='priceBlockItem'>
                             <span>Податок 5%:</span>
                             <div></div>
                             <b>1074 грн.</b>
                         </li>
                     </ul>
                     <button className='greenButton'>
                         Оформити замовлення <img src='/img/icons/arrow.svg' alt='arrow' />
                     </button>
                 </div>
                  </div>
                ) : (
                    <div className='cartEmpty'>
                        <img src='/img/empty-cart.png' alt='emty-cart' height='120px' />
                        <h2>Корзина пуста</h2>
                        <p>Додайте хоча б одну пару кросівок, щоб зробити замовлення</p>
                        <button onClick={onClose} className='greenButton'>
                            Повернутися назад <img  src='/img/icons/arrow.svg' alt='arrow' />
                        </button>
                    </div>
                )}

               
            </div>
        </div>
    );
};

export default Drawer;
