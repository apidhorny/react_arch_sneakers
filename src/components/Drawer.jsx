import React from 'react'

const Drawer = ({onClose}) => {
    return (
        <div className='overlay'>
            
        <div className='drawer'>
        <h2>
            Корзина <img onClick={onClose} src='/img/icons/btn-delete.svg' alt='delete' />
        </h2>
        <div className='items'>
            <div className='cartItem'>
                <img width={70} height={70} src='img/sneakers/1.jpg' alt='Sneakers' />
                <div className='cartSneakersBlok'>
                    <p>Чоловічі кросовки Nike Blazer Mid Suede</p>
                    <b>12 999 грн.</b>
                </div>
                <img className='removeBtn' src='/img/icons/btn-delete.svg' alt='delete' />
            </div>
            <div className='cartItem'>
                <img width={70} height={70} src='img/sneakers/2.jpg' alt='Sneakers' />
                <div className='cartSneakersBlok'>
                    <p>Чоловічі кросовки Nike Blazer Mid Suede</p>
                    <b>12 999 грн.</b>
                </div>
                <img className='removeBtn' src='/img/icons/btn-delete.svg' alt='delete' />
            </div>
            <div className='cartItem'>
                <img width={70} height={70} src='img/sneakers/2.jpg' alt='Sneakers' />
                <div className='cartSneakersBlok'>
                    <p>Чоловічі кросовки Nike Blazer Mid Suede</p>
                    <b>12 999 грн.</b>
                </div>
                <img className='removeBtn' src='/img/icons/btn-delete.svg' alt='delete' />
            </div>
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
    </div>
    )
}

export default Drawer
