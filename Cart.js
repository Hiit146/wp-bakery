import React from 'react';

function Cart({ cart, removeFromCart, checkout }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <button onClick={checkout}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
