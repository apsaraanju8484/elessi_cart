import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Banner from "../../components/Banner/Banner";
import Scrolling from "../../components/Scrolling/Scrolling";
import Gallery from "../../components/Gallery/Gallery";
import Latest from "../../components/Latest/Latest";
import Instagram from "../../components/Instagram/Instagram";
export const Shop = () => {



  const [items, setItems] = useState(PRODUCTS);
  const filterItem = (categItem) => {
    const updatedItem = PRODUCTS.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItem);
  }



  return (
    <div>
      <div className="shop">

        <Banner />
        <Gallery />
        <div className="container text-center">
          <h1>TRENDY ITEMS</h1>

          <div className="menu-tab d-flex justify-content-around">
            <div className="col-md-8 col-center">
              <button className="btn" onClick={() => filterItem('all')}>All</button>
              <button className="btn" onClick={() => filterItem('men')}>MENS</button>
              <button className="btn" onClick={() => filterItem('women')}>WOMENS</button>
              <button className="btn" onClick={() => filterItem('all')}>KIDS</button>
              <button className="btn" onClick={() => filterItem('onsale')}>ONSALE</button>
            </div>
          </div>

          <div className="products">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
        <Latest />
        <Instagram />
        <Scrolling />
      </div>

    </div>
  );
};
