import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(true);
      });
  }, []);

  if (error) {
    return <div className="error-message">Failed to load products. Please try again later.</div>;
  }

  if (products.length === 0) {
    return <div className="empty-message">No products available at the moment.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name || 'Product image'}
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <br></br>
            <span className="product-price"><b>${product.price.toFixed(2)}</b></span>
            
          </div>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
