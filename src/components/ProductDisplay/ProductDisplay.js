import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import {useParams} from 'react-router-dom';


export const ProductDisplay = ( {productId}) => {
    const {PRODUCTS} = useContext(ShopContext);
 
    const product = PRODUCTS.find((e)=> e.id === Number(productId));





console.log(product);



if(!product){
    return <div>Null</div>
}


    return (
        
        <div className='productdisplay'>
            <section class="py-0">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row gx-4 gx-lg-5 align-items-center">
                        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={product.productImage}  /></div>
                        <div class="col-md-6">

                            {/* <h1 class="display-5 fw-bold">{product.name}</h1>
                            <div class="small mb-1">11 sold in last 21 hours</div>
                            <div><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> 1 review</div>
                            <div class="fs-3 fw-1 mt-3">
                                <span class="fw-semibold">${product.old_price} - ${product.new_price}</span>


                            </div> */}
                            <p class="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                            </p>
                            <h6 className=' mb-4 fw-semibold'>HURRY! ONLY 15 LEFT IN STOCK.</h6>

                            <div class="progress " role="progressbar" aria-label="Danger striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped bg-danger " style={{ width: '10%' }} ></div>
                            </div>


                            <div class="form-check">

                            </div>   
                            <div >
                                <p className='fw-semibold'>COLOR : </p>
                                <div class="form-check">
                                    <input class="form-check-input bg-danger p-2 me-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label me-4 ms-2" for="flexRadioDefault2">
                                        Orange
                                    </label>
                                    <input class="form-check-input ms-5 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label ms-5 ps-4" for="flexRadioDefault1">
                                        Purple
                                    </label>
                                    <input class="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label ms-5 ps-4" for="flexRadioDefault1">
                                        Red
                                    </label>

                                </div>
                            </div>


                            <div className='mt-3 mb-3'>
                                <p className='fw-semibold'>SIZE : </p>
                                <div class="form-check">
                                    <input class="form-check-input bg-danger p-2 me-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label me-4 ms-2" for="flexRadioDefault2">
                                        M
                                    </label>
                                    <input class="form-check-input ms-5 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label ms-5 ps-4" for="flexRadioDefault1">
                                        L
                                    </label>
                                    <input class="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label ms-5 ps-4" for="flexRadioDefault1">
                                        XL
                                    </label>
                                    <input class="form-check-input ms-5" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label ms-5 ps-4" for="flexRadioDefault1">
                                        XXL
                                    </label>
                                </div>
                            </div>


                            {/* <div class=" fw-1 mt-3 mb-3">
                                Price :  <span className='text-danger fs-3 fw-bold'>
                                    $ {product.new_price}</span>


                            </div> */}
                            
                            {/* <div class="d-flex">
                                <input class="form-control text-center me-3 mt-1 p-2" style={{ width: '60px' }} id="inputQuantity" type="num" value="1" />
                                <button onClick={()=>{addToCart(product.id)}} class="btn btn-danger w-50 pt-3 pb-3 flex-shrink-0" style={{ borderRadius: '0.1px' }} type="button">
                                    <i class="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div> */}
                            <div class="d-flex mt-4">
                               
                                <button class="btn btn-dark w-75 pt-3 pb-3 flex-shrink-0" style={{ borderRadius: '0.1px' }} type="button">
                                   
                                   Buy Now
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductDisplay
