import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-brands'>
          <Link to='/'><h1>Shopie</h1></Link>
        </div>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'><ShoppingCart size={32} color='black' /></Link>
        </div>
    </div>
  )
}

export default Navbar