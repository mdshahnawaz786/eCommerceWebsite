import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ProductsApi, setCategory } from './Functions/function';
import AppNavbar from './Components/AppNavbarr/AppNavbar';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Product from './Components/Products/Product';
import {Routes, Route} from "react-router-dom"
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AppFooter from './Components/Footer/AppFooter';
import Cart from './Components/Cart/Cart';
import Payment from './Components/PaymentPage/Payment';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';



function App() {

  const [isLogin,setLogin] = useState(JSON.parse(localStorage.getItem("isLogin")))
    const product = useSelector((storeData)=>{
      return storeData.product
    })

     const dispatch = useDispatch()
     useEffect(()=>{
      isLogin === true ? localStorage.setItem("isLogin",JSON.stringify(true)) : localStorage.setItem("isLogin",JSON.stringify(false))
      ProductsApi(dispatch)
     },[isLogin])
  return (
    <div className="App">
      <AppNavbar isLogin={isLogin}  setLogin={setLogin}/>
      
     
     <Routes>
      <Route path='/' element={<><ImageSlider/><Product/><AppFooter/></>}/>
      <Route path='/product' element={<><Product/><AppFooter/></>}/>
      <Route path='/about' element={<><About/><AppFooter/></>}/>
      <Route path='/contact' element={<><Contact/><AppFooter/></>}/>
      <Route path='/productdetails/:id' element={<><ProductDetails/><AppFooter/></>}/>
      <Route path='/cart' element={isLogin === false ? <Login setLogin={setLogin}/> : <><Cart/><AppFooter/></>}/>
      <Route path='/payment' element={isLogin === false ? <Login setLogin={setLogin}/> :<><Payment/><AppFooter/></>}/>
      <Route path='/register' element={<><Register/></>}/>
      <Route path='/login' element={<><Login setLogin={setLogin}/></>}/>
     </Routes>
    </div>
  );
}

export default App;
