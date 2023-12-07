import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
export const Footer = () => {
  return (
    <>
      <div className='bg-light py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Navbar.Brand href="/" className='text-center pt-5 pb-5'><h1 className='text-dark' >ELESSI<span style={{ color: '#f76b6a', fontWeight: '700' }}>.</span></h1></Navbar.Brand>
              <p className='pe-5 para'>
                Calista Wise 7292 Dictum Av.
                Antonio, Italy.
                <br />
                (+01)-800-3456-88
                Nasathemes@Gmail.Com
                Elessi.Nasatheme.Com
              </p>

            </div>

            <div className='col-md-3'>
              <Navbar.Brand href="/" className='text-center icon pt-5 pb-5'><p><i class="bi bi-facebook  p-1"></i><i class="bi bi-messenger p-1"></i><i class="bi bi-instagram p-1"></i><i class="bi bi-pinterest p-1"></i> <i class="bi bi-telegram p-1"></i></p></Navbar.Brand>
              <p className='pe-5 pt-2'>
                <p>
                  Contact Us

                </p>

                <p>
                  Designers
                </p>
                <p>
                  Terms & Conditions
                </p>
                <p>
                  Returns & Exchanges
                </p>
                <p>
                  Shipping & Delivery
                </p>
                <p>
                  Privacy Policy
                </p>
              </p>
            </div>

            <div className='col-md-2'>
              <h4 className='fw-bold  pt-5 pb-5'>Newsletter</h4>
              <p className='pe-5 pt-2'>
                <p>
                  Store Location

                </p>

                <p>
                  Orders Tracking
                </p>
                <p>
                  My Account
                </p>
                <p>
                  Size Guide
                </p>
                <p>
                  FAQs
                </p>
                <p>
                  Shortcode
                </p>
              </p>
            </div>

            <div className='col-md-4'>
              <form class="d-flex pt-5 pb-5" role="search">
                <input class="form-control me-2" style={{ borderRadius: '0.1px' }} type="search" placeholder="Your Email Address" aria-label="Search" />
                <button class="btn btn-danger" style={{ borderRadius: '0.1px' }} type="submit">SUBSCRIBE</button>
              </form>
              <p className=' '>
                <div> <p className='float-start'>Monday - Friday</p> <p className='float-end'>08:00 - 20:00</p></div>
                <div className='line mb-2'></div>
                <div> <p className='float-start'>Saturday</p> <p className='float-end'>09:00 - 21:00</p></div>
                <div className='line mb-2'></div>
                <div> <p className='float-start'>Sunday</p> <p className='float-end'>13:00 - 22:00</p></div>
                <div className='line mb-2'></div>
              </p>


            </div>

          </div>
        </div>


      </div>
      <div className='bg-white py-3 text-center'>
        <p>&copy; 2023 Created by <span style={{ color: 'red' }}>The4</span> studio. Premium e-commerce solutions.
        </p>
      </div>
    </>
  )
}

export default Footer
