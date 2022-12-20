import React from 'react';
import './shop.css';
import { PRODUCTS } from '../../products';
import Product from './Product';

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>New Shop</h1>
        </div>
        <div className='shop-products'>
            {PRODUCTS.map(product => (
               <Product data={product} /> 
            ))}
        </div>
    </div>
  )
}

export default Shop