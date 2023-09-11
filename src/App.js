import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { ProductsApi, setCategory } from './Functions/function';
import AppNavbar from './Components/AppNavbarr/AppNavbar';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Product from './Components/Products/Product';
import {Routes, Route} from "react-router-dom"
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AppFooter from './Components/Footer/AppFooter';
import Cart from './Components/Cart/Cart';
import Payment from './Components/PaymentPage/Payment';



function App() {
    const product = useSelector((storeData)=>{
      return storeData.product
    })
     const dispatch = useDispatch()
     useEffect(()=>{
      ProductsApi(dispatch)
     },[dispatch])
  return (
    <div className="App">
      <AppNavbar/>
      
     
     <Routes>
      <Route path='/' element={<><ImageSlider/><Product/><AppFooter/></>}/>
      <Route path='/product' element={<><Product/><AppFooter/></>}/>
      <Route path='/productdetails/:id' element={<><ProductDetails/><AppFooter/></>}/>
      <Route path='/cart' element={<><Cart/><AppFooter/></>}/>
      <Route path='/payment' element={<><Payment/><AppFooter/></>}/>
     </Routes>
    </div>
  );
}

export default App;
