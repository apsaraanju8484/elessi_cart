// Product.js
import React from 'react';

const Product = ({ data, addToCart, cartQuantity }) => {
  return (
    <li key={data.id}>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <p>Price: {data.price}</p>
      <p>Quantity in Cart: {cartQuantity}</p>
      <button onClick={() => addToCart(data.id)}>Add to Cart</button>
    </li>
  );
};

export default Product;
