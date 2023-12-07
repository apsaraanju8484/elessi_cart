import React, { useContext } from 'react';
import { ShopContext } from './yourContextFile'; // Update this with the correct path
import { PRODUCTS } from '../products';
import Product from './Product'; // Import the Product component

const ProductDisplay = () => {
  const { cartItems, addToCart } = useContext(ShopContext);

  return (
    <div>
      <h2>Product Display</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} cartQuantity={cartItems[product.id]} />
        ))}
      </ul>
    </div>
  );
};

export default ProductDisplay;
