import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';
import { addToCart } from '../../Functions/function';
import { useDispatch } from 'react-redux';
import StarRatings from "react-star-ratings";


const Card = ({product}) => {
    // console.log(product);
    const dispatch = useDispatch()
  return (
    <div className='cardContainer'>
        {product !==0 ? <>
            {product.map((ele)=>{
                return(
                    <>
                        <div className='card' >
                            <img src={ele.image} alt="" />
                            <h5>{ele.title.substring(0,16)+"..."}</h5>
                            <h4><b>₹ {(ele.price * 83.12).toFixed(2)}</b></h4>
                            <div className="starContainer">
                            <StarRatings
                                rating={ele.rating.rate}
                                starRatedColor="gold"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                                className="star-ratings"
                            />
                            </div>
                            {/* <h6>{ele.rating.rate} </h6> */}
                            
                            <div className="buttonContainer">
                            <button className='addToCart' onClick={(()=>{
                                addToCart(ele,dispatch)
                            })}>Add To Cart</button>
                            
                            <Link to={`/productdetails/${ele.id}`} className='moreDetailLink'>
                            <button className='moreDetail'>More Details</button>
                            </Link>
                            </div>
                        </div>
                    </>
                )
            })}
        </> : <><h3>Loading</h3></>}
    </div>
    
  )
}

export default Card

