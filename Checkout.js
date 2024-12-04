import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Home from './components/Home'

function App() {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove product from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to handle checkout
  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Proceed to checkout form (you could navigate to checkout page here)
    alert('Proceeding to checkout...');
  };

  return (
    
    <div className="App">
      <h1>Checkout</h1>
      
      <div className="store">
        <ProductList addToCart={addToCart} />
        
        <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
        
        {cart.length > 0 && <CheckoutForm cart={cart} />}
      </div>
    </div>
  );
}

export default App;

