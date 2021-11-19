import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Drawer />
            <Header />
            <section className='content'>
                <div className='header-and-serach-block'>
                    <h1>Всі кросівки</h1>
                    <div className='search-block'>
                        <img src='img/icons/seacrh.svg' alt='search' />
                        <input type='text' placeholder='Пошук...' />
                    </div>
                </div>

                <div className='sneakers-list'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </div>
    );
}

export default App;
