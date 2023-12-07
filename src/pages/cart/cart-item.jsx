import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, removeCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">

      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">

          <button className="btn btn-danger" onClick={() => removeFromCart(id)}> - </button>
          <input className="btn "
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="btn btn-danger" onClick={() => addToCart(id)}> + </button>
        </div>
        
      </div>
      <div className="top">
          <div className="float-left">
            <button className="btn" onClick={() => removeCart(id)}><i class="bi fs-3 p-4 bi-trash3"></i></button>
          </div>
        </div>
    </div>
  );
};
