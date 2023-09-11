import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import ProductNavbar from '../ProductNav/ProductNavbar'
import './product.css'

const Product = () => {
    const category = useSelector((storeData)=>{
        return storeData.category
    })
    
  return (
    <div className='product'>
        <div className="productHeading">
        <h1>Products</h1>
        <hr />
        </div>
        <br /><br />
        <ProductNavbar/>
        <br /><br />
        <Card product={category}/>
    </div>
  )
}

export default Product