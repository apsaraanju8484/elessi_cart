// ProductDetail.js
import React from "react";

const ProductDetail = ({ data }) => {
  
  const { productName, price, productImage, discount, color, color1, color2 } = data;

  return (
    <div>
      <h1>{productName}</h1>
      <p>Price: {price}</p>
      <p>Discount: {discount}</p>
      {/* Add other product details */}
      {/* You can use the color properties to display color options */}
    </div>
  );
};

export default ProductDetail;
