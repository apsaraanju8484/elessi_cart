import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Instagram.css'
import Card from 'react-bootstrap/Card';
// Import Swiper styles
import 'swiper/css';
const Instagram = () => {
 return (
  <div>
   <div className='text-center '>
    <h2> Our Instagram</h2>
    <div className='container'>
     <div className='row py-5 text-center'>

     <Swiper
    spaceBetween={50}
     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='pt-5'
    >
      <SwiperSlide className='col-md-2 col-sm-2 box'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-1_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>
      

    <SwiperSlide className='col-md-2 col-sm-2'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-2_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>


    <SwiperSlide className='col-md-2 col-sm-2'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-3_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>


    <SwiperSlide className='col-md-2 col-sm-2'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-4_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>


    <SwiperSlide className='col-md-2 col-sm-2'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-4_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>


    <SwiperSlide className='col-md-2 col-sm-2'> 
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-5_600x.png?v=1613174022" />
      
  </SwiperSlide>


    <SwiperSlide className='col-md-2 col-sm-2'> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/files/brand-6_600x.png?v=1613174022" />
      
    </Card></SwiperSlide>


   
      
    </Swiper>












      {/* <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-1_600x.png?v=1613174022' className='w-100 insta' />
      </div>
      <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-2_600x.png?v=1613174022' className='w-100 insta'/>
      </div>
      <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-3_600x.png?v=1613174022' className='w-100 insta'/>
      </div>
      <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-4_600x.png?v=1613174022' className='w-100 insta'/>
      </div>
      <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-5_600x.png?v=1613174022' className='w-100 insta'/>
      </div>
      <div className='col-md-2 col-sm-3 text-center'>
       <img src='https://demo-elessi.myshopify.com/cdn/shop/files/brand-6_600x.png?v=1613174022' className='w-100 insta'/>
      </div> */}
     </div>
    </div>
   </div>
  </div>
 )
}

export default Instagram
