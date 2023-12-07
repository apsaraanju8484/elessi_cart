import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";

import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./components/Menu/Menu";
import ProductDetail from "./components/ProductDetail";
import { PRODUCTS } from "./products";
import { Product } from "./pages/shop/product";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Menu />

          <Routes>
            <Route path="/" element={<Shop />} />

            <Route path="/product/:productId" element={<ProductDetail />}/>
   
              

            {/* <Route path="/:productId"  element={<ProductOne/>} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
