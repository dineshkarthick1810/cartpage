import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





const Products = ({item,handlecart}) => {

    
const {image,category,title,price}=item

  return (
    <>

   
    
    <div className='card rounded shadow mt-5' style={{width:"250px"}}>
      
            <img src={image} alt='some error occured' className='card-img-top' style={{backgroundSize:"cover",height:"200px"}} />

            <div  className='card-body'>
            <div className=''>

<p className='text-dark' style={{fontWeight:"bold"}}>{`Category :${category}`}</p>
<p className='text-dark' style={{fontWeight:"bold"}}>{ ` price :${price}`}</p>
<p className='text-dark' style={{fontWeight:"bold"}}>{`title :${title.length>18?title.substring(0,22)+"...":title}`}</p>
<button className='btn btn-danger' onClick={()=>handlecart(item)} >Add to Cart</button>



</div>
</div>
        
            </div>
    
            
       
      
   
    
    </>
  )
}

export default Products
