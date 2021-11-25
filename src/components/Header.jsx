import React from 'react'

const Header = ({onOpenCart}) => {
    return (
        <header className='header'>
        <div className='headerLeft'>
            <img src='img/logo.png' alt='logo' width={40} height={40} />
            <div>
                <h3>React Sneakers</h3>
                <p className='p-logo'>Магазин найкращих кросівок</p>
            </div>
        </div>
        <ul className='headerRight'>
            <li className='item-cart' onClick={onOpenCart}>
                <img src='img/icons/cart.svg' alt='logo' width={18} height={18} />
                <span>1205 грн.</span>
            </li>
            <li>
                <img src='img/icons/favorite.svg' alt='logo' width={18} height={18} />
            </li>
            <li>
                <img src='img/icons/user.svg' alt='logo' width={18} height={18} />
            </li>
        </ul>
    </header>
    )
}

export default Header
