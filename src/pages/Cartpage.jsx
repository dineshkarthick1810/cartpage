import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cartpage = ({ cart ,setCart}) => {
  const [newcart,setNewCart]=useState(
    cart.map((res)=>{
    return {...res,quantity:1}
  
  }))

  
 console.log(newcart)

    const handleadd=(index)=>{
   
      const anotherCart=[...newcart]
      anotherCart[index].quantity++
      setNewCart(anotherCart)
    
     
     

      
    }
    const handlesub=(index)=>{
      const anotherCart=[...newcart]
     if(anotherCart[index].quantity >1){
      anotherCart[index].quantity--
      setNewCart(anotherCart);
     }
     
    }
      
      
    const handleDelete=(index)=>{
      const remove=  newcart.filter((res,i)=>{
          return index !=i
         
          
          
          
        })
        setNewCart([...remove])
        setCart([...remove])
        
    
      }
 


const handleorder=()=>{
  toast.success("your order is placed")
  console.log("order placed")
}

  return (
    <div className='container'>
      <h2>Cart Items</h2>

      {newcart.length>0 ? newcart.map((res,index)=>{
        return   <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:"100px",border:"2px solid white"}} className=' shadow'>
         <div style={{display:"flex",flexDirection:"column"}}>
            <img src={res.image} alt='some error occured' className=' img-fluid ' style={{width:"200px",height:"200px"}}/>

            <button className='btn btn-primary mt-2 btn-sm'onClick={()=>handleDelete(index)} >Remove Item</button>
            </div>

            <div>
              <p style={{fontWeight:"bold"}}>Title :<span  className='badge bg-danger ms-1'>{res.title.length>20? res.title.substring(0,20)+"..." : res.title} </span> </p>

              <p style={{fontWeight:"bold"}}>price :<span  className='badge bg-danger ms-1'>{`$ ${res.price}`} </span></p>

              <p style={{fontWeight:"bold"}}>Description :<span  className='badge bg-danger ms-1'>{res.description.length>20? res.description.substring(0,20)+"..." :res.description} </span></p>

              <div>
                <button className='btn btn-secondary btn-sm me-1' onClick={()=>handlesub(index)}>-</button>
                <span style={{fontWeight:"bold"}}>{res.quantity}</span>
                <button className='btn btn-secondary btn-sm ms-1' onClick={()=>handleadd(index)}>+</button>
              </div>
              <p style={{fontWeight:"bold"}} className='mt-2'>Total Amount : {res.price*res.quantity}</p>
              <button className='btn btn-danger btn-sm mb-1' onClick={handleorder}>Place Order</button>
              <ToastContainer />

             

            </div>
          
         
        </div>
       
  
  
       
      }) : <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}><p className='badge bg-warning p-3' style={{fontWeight:"bold",fontSize:"23px"}}>No items Added</p></div>}


      
    
    </div>
  )}
 

export default Cartpage
