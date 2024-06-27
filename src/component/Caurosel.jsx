import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Caurosel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
  return (
    <div className=" contianer">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
      <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1715775955272_g4ewtnj67.jpg'    style={{width:"100%",height:"300px"}}  className=' rounded'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1715840680583_u1webmay.jpg'  style={{width:"100%",height:"300px"}} className=' rounded'/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg'  style={{width:"100%",height:"300px"}}  className=' rounded'/>

        
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1715860795074_premiereweb.jpg'  style={{width:"100%",height:"300px"}}  className=' rounded'/>

       
      </Carousel.Item>

    </Carousel>
    
    </div>

      
      
         

        
       
      
      
     
          

      
    
     
      
          
       
     
      
      
         

      
      
      
      
  
    
  )
}

export default Caurosel
