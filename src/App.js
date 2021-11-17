function App() {
    return (
        <div className='App'>
            <header className='header'>
                <div className='headerLeft'>
                    <img src='img/logo.png' alt='logo' width={40} height={40} />
                    <div>
                        <h3>React Sneakers</h3>
                        <p className='p-logo'>Магазин найкращих кросівок</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
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
            <section className='content'>
                <h1>Всі кросівки</h1>

                <div className='sneakers-list'>
                    <div className='card'>
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
                    <div className='card'>
                        <img src='img/sneakers/2.jpg' alt='sneakers' width={133} height={112} />
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
                    <div className='card'>
                        <img src='img/sneakers/3.jpg' alt='sneakers' width={133} height={112} />
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
                    <div className='card'>
                        <img src='img/sneakers/4.jpg' alt='sneakers' width={133} height={112} />
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
                </div>
            </section>
        </div>
    );
}

export default App;
