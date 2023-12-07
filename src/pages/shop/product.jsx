import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./product.css";
import { Link } from 'react-router-dom'

export const Product = (props) => {
  const { id, productName, price, productImage ,image1 , discount ,color , color1, color2} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div>

{/* <Link to={`/product/${props.id}`} > */}
      <div className='container'>
        <div className="product-grid">
          <div className="product">
            <div className="product-img pb-3">
              <img src={productImage} alt="front product image" />
              <img src={image1} alt="rear product image" className="rear-img" />
              <i className='bi bi-heart   rear-img3'></i>
              <div className='box rear-img4 ps-2 pe-2 '>{discount}</div>
              <i className="bi bi-eye rear-img1 bg-dark  text-white " ></i>

              <button className="addbtn" onClick={() => addToCart(id)}>
              <i className="bi bi-handbag rear-img2 bg-danger  text-white">

              {cartItemCount > 0 && <> { - cartItemCount}</>}

                </i>
            </button>
             

            </div>
          </div>
          <div className='row'>
            <div className='float-start col-md-8'>
            <Link to={`/product/${id}`}>
      <div>
        <h6>{productName}</h6>
        {/* Add other product details */}
      </div>
    </Link>
               <h6 className='text-justify '>{productName}</h6>
            
              <p className='text-justify'>$ {price} </p>
            </div>
            <div className='float-end col-md-4 circle'>

              <img src={color} className='w-25 ' />
                  <img src={color1} className='w-25' />
                  <img src={color2} className='w-25' />
            </div>
            {/* <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button> */}
          </div>
        </div>
      </div>
      
    </div>

  );
};
export default Product;