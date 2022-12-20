import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext';
import CartItem from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1></div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {
        totalAmount > 0 ? (
        <div className='checkout'>
          <h3>Subtotal : ${totalAmount}</h3>
          <div className='checkout-btn'>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
        ) : (
        <h2>Your Cart is Empty</h2>
       )}
    </div>
  )
}

export default Cart