import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Menu = () =>  {

  

  return (
   <div >
    

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top  pb-0">
      
<Navbar.Brand className=''></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-start col-md-4">
          <Nav.Link href="#home" className='pe-3'>DEMO</Nav.Link>
           <Nav.Link href="#features" className='pe-3'>SHOP  < span style={{ backgroundColor: '#f76b6a', borderRadius: '0.1px', bottom: '20px' }} class="position-absolute ps-2 pe-2   translate-middle badge ">
             SALE
             <span class="visually-hidden">unread messages</span>
           </span>
           </Nav.Link>
           <Nav.Link href="#pricing" className='pe-3'>BLOG</Nav.Link>
           <Nav.Link href="#pricing" className='pe-3' >PAGES</Nav.Link>
           <Nav.Link href="#pricing" className='pe-3'>BUY THEME <span style={{ backgroundColor: '#f76b6a', borderRadius: '0.1px', bottom: '20px' }} class="position-absolute ps-2 pe-2   translate-middle badge ">
             SALE
             <span class="visually-hidden">unread messages</span>
           </span> </Nav.Link>
          </Nav>
          <Nav className=' col-md-4  d-flex justify-content-center'>
            
       <Nav.Link href="/"><h1 className='fw-bolder text-black'>ELESSI<span style={{ color: '#f76b6a' , fontWeight:'700' }}>.</span></h1></Nav.Link>
          </Nav>
          <Nav className=' col-md-4 justify-content-end'>
          <i class="bi bi-search pe-4" style={{color:'#333'}}></i>
         <i class="bi bi-gear pe-4" style={{color:'#333'}}></i>
         {/* <i class="bi bi-heart pe-4" style={{color:'#333'}}><span style={{ backgroundColor: '#f76b6a' }} class="position-absolute top-0 translate-middle badge rounded-pill ">
0
<span class="visually-hidden">unread messages</span>
</span></i> */}
         {/* <i class="bi bi-cart2 pe-4" style={{color:'#333'}}><span style={{ backgroundColor: '#f76b6a' }} class="position-absolute top-0 translate-middle badge rounded-pill ">

<span class="visually-hidden">unread messages</span>
</span></i> */}
<Link to="/cart">
  
          <ShoppingCart size={32} />
        </Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
 </div>
  )
}

export default Menu