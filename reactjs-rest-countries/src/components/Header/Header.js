import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='menu'>
            <h1>Welcome to my rest countries</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/detail">Detail</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;