import React, { useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const data = [
        { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: 'img/sneakers/1.jpg' },
        { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imgUrl: 'img/sneakers/2.jpg' },
        { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8490, imgUrl: 'img/sneakers/3.jpg' },
        { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: 'img/sneakers/4.jpg' },
    ];

    const [cartOpened, setCardOpened] = useState(false);

    return (
        <div className='App'>
            {cartOpened && <Drawer onClose={() => setCardOpened(false)} />}
            <Header onOpenCart={() => setCardOpened(true)} />
            <section className='content'>
                <div className='header-and-serach-block'>
                    <h1>Всі кросівки</h1>
                    <div className='search-block'>
                        <img src='img/icons/seacrh.svg' alt='search' />
                        <input type='text' placeholder='Пошук...' />
                    </div>
                </div>

                <div className='sneakers-list'>
                    {data.map((item) => (
                        <Card title={item.title} price={item.price} imageUrl={item.imgUrl} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
