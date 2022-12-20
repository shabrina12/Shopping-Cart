import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

const CartItem = (props) => {
    const {id, name, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem-card'>
        <img src={productImage} alt='product' />
        <div className='cart-description'>
               <h3>{name}</h3>
               <p>${price}</p>
               <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
        </div>
    </div> 
  )
}

export default CartItem