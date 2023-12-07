import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <section className='bg-light  pt-5' data-bs-theme="light" >

     
      <Carousel data-bs-theme="dark" >

        <Carousel.Item >
          <img
            className="d-block w-100 "
            src="https://demo-elessi.myshopify.com/cdn/shop/files/slider02-3.jpg?v=1613174186"
            alt="First slide" height={'555px'}
          />
          <Carousel.Caption >

            <p className='text-start ' style={{ marginTop: '-400px' }}>
              <h5 style={{ letterSpacing: '12px', fontWeight: '600', color: '#666', lineHeight: '17px' }} >ELESSI STORE</h5>
              <div className='' >
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>Autum
                </h1>
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>
                  & Winter 2018

                </h1>
              </div>
              <button className='btn ps-5 pe-5  ' style={{ backgroundColor: '#f76b6a',borderRadius: '0.1px' }}>SHOP NOW</button>
            </p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75"
            src="https://demo-elessi.myshopify.com/cdn/shop/files/slider03.jpg?v=1613173997"
            alt="Second slide"
            height={'555px'}
          />
          <Carousel.Caption>
            <p className='text-start ' style={{ marginTop: '-300px' }}>
              <h5 style={{ letterSpacing: '12px', fontWeight: '600', color: '#666', lineHeight: '17px' }} >ELESSI STORE</h5>
              <div className='' >
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>Autum
                </h1>
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>
                  & Winter 2018

                </h1>
              </div>
              <button className='btn ps-5 pe-5 border-0 ' style={{ backgroundColor: '#f76b6a' }}>SHOP NOW</button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo-elessi.myshopify.com/cdn/shop/files/slider02.jpg?v=1613173997"
            alt="Third slide " 
            height={'555px'}
          />
          <Carousel.Caption>
            <p className='text-start ' style={{ marginTop: '-300px' }}>
              <h5 style={{ letterSpacing: '12px', fontWeight: '600', color: '#666', lineHeight: '17px' }} >ELESSI STORE</h5>
              <div className='' >
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>Autum
                </h1>
                <h1 style={{ fontSize: '50px', fontWeight: '800', color: '#333' }}>
                  & Winter 2018

                </h1>
              </div>
              <button className='btn ps-5 pe-5 border-0 ' style={{ backgroundColor: '#f76b6a' }}>SHOP NOW</button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>









    </section>
  )
}

export default Banner