
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


import Productsdisplay from './pages/Productsdisplay';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"





import Cartpage from './pages/Cartpage';
import {  useState } from 'react';


function App() {




  const [cart,setCart]=useState([])



  const handlecart=(item)=>{
let present=false
    cart.forEach((res)=>{
      if(item.id === res.id){
        present=true

      }
    })
    if(present){
      return ;
    }
    setCart([...cart,item])
   
   
  }



    

console.log(cart)
  return (
    <>
     
      <BrowserRouter>

     <Routes>
     
      
      
      <Route path='/' element={<Productsdisplay  cartcount={cart.length} handlecart={handlecart} 
      />}/>
      <Route path='/carts' element={<Cartpage cart={cart} setCart={setCart}/>}/>

     
     </Routes>
    
     </BrowserRouter> 
    
  


    </>
  )
}

export default App
