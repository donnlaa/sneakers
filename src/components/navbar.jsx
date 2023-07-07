import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import styles from './navbar.css';
import { ShopContext } from '../context/shop-context';

const logo = require('../assets/logo.png');

export const Navbar = () => {
    const { cartAmount } = useContext(ShopContext);
    const totalAmountCart = cartAmount();
    return (
        <div className='navbar'>
            <img id="logo" src={logo} alt="Logo" />
            <div className='links'>
                
                <Link to="/"> Shop </Link>
                <Link to="/cart"> <ShoppingCart size={32} /> </Link>
                <p>{totalAmountCart}</p>
            </div>
        </div>
    );
};
