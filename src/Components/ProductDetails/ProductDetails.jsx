import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import './productdetail.css'
import { addToCart } from '../../Functions/function'
import { useDispatch } from 'react-redux'
import StarRatings from "react-star-ratings";




const ProductDetails = () => {
  const dispatch = useDispatch()
    const [productId, setproductId] = useState("")
    console.log(productId);
    const {id} = useParams()
    // console.log(id);

    async function productDetailsbyId(id) {
        const api = await fetch(`https://fakestoreapi.com/products/${id}`);
        const response = await api.json();
        console.log(response);
        setproductId(response)
        
      }
      useEffect(()=>{
        productDetailsbyId(id)
      },[])
  return (
    <div className='productDetailContainer'>
        {productId !== "" ? <>
            <div className='detail'>
                <div className='detailImg'>
                    <img src={productId.image} alt="" />
                </div>
                <div className='productDetail'>
                <h3><b>{(productId.category).toUpperCase()}</b></h3>&nbsp;&nbsp;
                <h4>{productId.title}</h4>&nbsp;&nbsp;
                <h6><b>₹ {(productId.price * 83.12).toFixed(2)}</b></h6>&nbsp;
                <div className="starContain">
                <StarRatings
                        rating={productId.rating.rate}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        className="star-ratings"
                      />
                </div>&nbsp;&nbsp;

                  <p>{productId.description}</p>
                  &nbsp;&nbsp;
                  <div className="buttonProductDetail">
                  <button className='productCartBtn' onClick={(()=>{
                    addToCart(productId,dispatch)
                 })}>Add To Cart</button>
                 <Link className='productGoToCartLink' to='/cart' >
                 <button className='productGoToCartBtn'>Go To Cart</button> 
                 </Link>   
                  </div>
                   
                </div>
            </div>
        </> : <>Loading</>}
    </div>
  )
}

export default ProductDetails