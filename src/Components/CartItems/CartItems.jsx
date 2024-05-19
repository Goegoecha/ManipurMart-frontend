import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const cartProducts = all_product.filter(product => cartItems[product.id] > 0);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartProducts.map(product => (
        <div>
          <div className="cartitems-format cartitems-format-main" key={product.id}>
            <img src={product.image} alt="" className='carticon-product-icon' />
            <p>&#8377; {product.name}</p>
            <p>&#8377; {product.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
            <p>&#8377; {(product.new_price * cartItems[product.id]).toFixed(2)}</p>
            <img className='cartitems-remove-icon' onClick={() => removeFromCart(product.id)} src={remove_icon} alt="" />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>&#8377; {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>&#8377; {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems