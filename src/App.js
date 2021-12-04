import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCardOpened] = useState(false);

    useEffect(() => {
        fetch('https://61abc152264ec200176d431f.mockapi.io/items')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems([...cartItems, obj]);
    };

    return (
        <div className='App'>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} />}
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
                    {items.map((item) => (
                        <Card title={item.title} price={item.price} imageUrl={item.imgUrl} onPlus={() => onAddToCart(item)} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
