import React, { useContext } from 'react';
import {ShopContext} from '../../context/shopContext';

const Product = (props) => {
    const {id, name, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className='product-card'>
            <img src={productImage} />
            <div className='product-description'>
               <h3>{name}</h3>
               <p>${price}</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>
                Add To Cart {
                    cartItemAmount > 0 && <>({cartItemAmount})</>
                }
            </button>
        </div>
    )
}

export default Product