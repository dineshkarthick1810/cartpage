import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, CSSProperties } from 'react';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
import Products from '../component/Products';
import { Badge } from 'react-bootstrap';
import "../pages/Cartpage"
import { Link } from 'react-router-dom';
import DotLoader from "react-spinners/DotLoader";



const Prodctsdisplay = ({cartcount,handlecart,greeting}) => {
  
 const [data,setData]=useState([])
    const [searchvalue,setsearchvalue]=useState("")
  
const [filtereddata,setfilterData]=useState([])

 
const handlesearchvalue=(e)=>{
  setsearchvalue(e.target.value)
 
    
}

const [loading,setloading]=useState(true)

useEffect(()=>{
   fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((val)=>{
    setData(val)
    setloading(false)
    const filtering=val.filter((res)=>{
     return searchvalue && res.title.toLowerCase().includes(searchvalue)

    })
setfilterData(filtering)
  })

},[searchvalue])
   
      

      
   
   
    
      
   
  
  return (
    <>
    {loading?<div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>  <DotLoader
        
        loading={loading}
       
       
       
        data-testid="loader"
      /></div>:   <div className='container'>
      <div  className='mt-3'>
        <div className='d-flex justify-content-between'>
        <form>
     
          <div style={{position:"relative",width:"600px",borderRadius:"20px"}} className='bg-dark-subtle'>
          <input type="text" placeholder='search' style={{color:"grey",padding:"8px",fontSize:"bold",letterSpacing:"1px",width:"500px",border:"none",outline:"none",borderRadius:"20px"
          }} className='ms-4 bg-dark-subtle' onChange={(e)=>handlesearchvalue(e)} />
          <span style={{position:"absolute",left:"0px",top:"6px"}} className='ms-2'><SearchIcon/></span>
          </div>
          
        </form> 
       
        <div style={{position:"relative"}}>
        <Link to="/carts"  className='text-decoration-none text-dark mt-2 ms-2 ' style={{fontWeight:"bold"}}  >Cart</Link>
        <span className="position-absolute  translate-middle badge rounded-pill bg-danger me-1" style={{width:"16px",borderRadius:"50%",top:"13px",right:"25px",height:"16px",display:'flex',justifyContent:"center",alignItems:"center"}}>
      {cartcount}</span>
      </div>
  
  
        </div>
  
        {searchvalue?<div className="list-group list-group-flush" style={{height:"120px",overflowY:"scroll"}}>
        {filtereddata.map((data)=>{
   return <button type="button" className="list-group-item list-group-item-action"  >{data.title}</button>
        
        })}
        
   
  </div>:<div></div>}
        
        
  
          </div>
  
        
          <div className='row'>
           
           
  {searchvalue?filtereddata.map((filterdata)=>{
    return  <div className='col-sm-6 col-lg-4'  key={filterdata.id} >
  
    <Products  item={filterdata}  handlecart={handlecart} />
      </div>
    
  }) :data.map((res)=>{
    return <div className='col-sm-6 col-lg-4'  key={res.id} >
  
    <Products item={res} handlecart={handlecart} />
      </div>
  })}
  
    
    
  
           
  
  
         
  
  
          
  
              
          </div>
        
      </div>}
   
    </>
  )
}

export default Prodctsdisplay