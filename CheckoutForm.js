import React, { useState } from 'react';
import axios from 'axios';

function CheckoutForm({ cart }) {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    shippingAddress: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = { ...customer, orderDetails: cart };
    try {
      await axios.post('http://localhost:5000/api/order', orderData);
      alert('Order placed successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={customer.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={customer.shippingAddress.street}
        onChange={(e) => setCustomer({
          ...customer,
          shippingAddress: { ...customer.shippingAddress, street: e.target.value }
        })}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={customer.shippingAddress.city}
        onChange={(e) => setCustomer({
          ...customer,
          shippingAddress: { ...customer.shippingAddress, city: e.target.value }
        })}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={customer.shippingAddress.state}
        onChange={(e) => setCustomer({
          ...customer,
          shippingAddress: { ...customer.shippingAddress, state: e.target.value }
        })}
        required
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP Code"
        value={customer.shippingAddress.zip}
        onChange={(e) => setCustomer({
          ...customer,
          shippingAddress: { ...customer.shippingAddress, zip: e.target.value }
        })}
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;
