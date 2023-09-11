import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import { Link } from "react-router-dom";
import { deleteCart } from "../../Functions/function";




const Cart = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((storeData) => {
    return storeData.addToCart;
  });

  // console.log(cartItem);

const ref = useRef([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,])
const [state, setstate]= useState(false)

  return (
    <div className="cartContainerBox">
    {cartItem.length !== 0 ? 
      <><> {cartItem.map((ele)=>{
        return(
          <>
          <div className='cartContainer'>
              <div className='cartImg'>
                  <img src={ele.image} alt="" />
              </div>
              <div className='cartDetail'>
              <h4>{ele.title}</h4>
      
              <div className="addMinusButton">
                  <div className="plusBtn" onClick={(()=>{
                      ref.current[ele.id - 1]++
                      setstate(!state)
                    })}><i class="fa-solid fa-plus"></i>
                  </div>

                  <div className="minusBtn" onClick={(()=>{
                    ref.current[ele.id - 1]--
                    if(ref.current[ele.id - 1] === 0){
                      deleteCart(ele.id, cartItem, dispatch)
                    
                    }
                    
                    setstate(!state)
                  })}><i class="fa-solid fa-minus"></i>
                  </div>
              </div>


              <h3>{`${ref.current[ele.id - 1]} x ₹ ${(ele.price)} = ₹ ${(ref.current[ele.id - 1] * (ele.price))}`}</h3>

               <div className="deleteButton" onClick={(()=>{
                  deleteCart(ele.id, cartItem, dispatch)
               })}>
                  <i class="fa-solid fa-xmark"></i>
                </div>     
              </div>
          </div>
          </>
        )
      })}
           
      </><div className="button_container">
      <Link to='/payment'>
      <Button
        variant="outline-secondary"
        onClick={(()=>{
          dispatch({
            type: "cartPaymentCount",
            payload: ref.current
          })
        })}
      >
        Proceed To Checkout
      </Button>
      
      </Link>
     
  </div></>
     : (
      <>
        <h1>Your cart is empty!</h1>
      </>
    )}


  </div>
  );
};

export default Cart;
