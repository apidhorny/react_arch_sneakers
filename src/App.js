import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCardOpened] = useState(false);

    useEffect(() => {
        axios.get('https://61abc152264ec200176d431f.mockapi.io/items').then((response) => {
            setItems(response.data);
        });
        axios.get('https://61abc152264ec200176d431f.mockapi.io/cart').then((response) => {
            setCartItems(response.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://61abc152264ec200176d431f.mockapi.io/cart', obj);
        setCartItems([...cartItems, obj]);
    };

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const onRemoveItem = (id) => {
        // axios.delete(`https://61abc152264ec200176d431f.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearInput = () => {
        setSearchValue('');
    };

    return (
        <div className='App'>
            {cartOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} />}
            <Header onOpenCart={() => setCardOpened(true)} />
            <section className='content'>
                <div className='header-and-serach-block'>
                    <h1>{searchValue ? `Пошук по "${searchValue}"` : 'Всі кросівки'}</h1>
                    <div className='search-block'>
                        <img src='img/icons/seacrh.svg' alt='search' />
                        {searchValue && <img onClick={clearInput} className='clear removeBtn' src='/img/icons/btn-delete.svg' alt='Clear' />}
                        <input onChange={onChangeSearchValue} value={searchValue} type='text' placeholder='Пошук...' />
                    </div>
                </div>

                <div className='sneakers-list'>
                    {items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card key={item.imgUrl} title={item.title} price={item.price} imageUrl={item.imgUrl} onPlus={() => onAddToCart(item)} />
                        ))}
                </div>
            </section>
        </div>
    );
}

export default App;
