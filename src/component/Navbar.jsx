import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { InputGroup, ModalDialog } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Signup.css"




const Navbar = () => {

  //for offcanvas after clicking the usericon
  const [offcanvasshow, setoffcanvasshow] = useState(false);

  const offcanvashandleClose = () => setoffcanvasshow(false);
  const offcanvashandleShow = () => setoffcanvasshow(true);


  //
  //for clicking for sign up btton and change the username and icon
  const [forchange,setchange]=useState(false)




  //
  //for maintain signup and signin page details and styling 
  const [action,setaction]=useState("Signup")



  //

  //for maintaining sigup input fields
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  //
// for modal box

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    
    }
    else {
      // Perform action on successful validation
      // For now, let's just close the modal
      event.preventDefault()
      setShow(false);
      setchange(true)
    }

    setValidated(true);
    
    
   
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//
 

  // for maintain input value

  const [inputvalue,setInputvalue]=useState("")

  //

 
  
  
  return (
    <>
    <nav className="navbar bg-body-tertiary ">
  <div className="container" style={{position:"relative"}}>
    <a className="navbar-brand " style={{fontWeight:"bold",fontSize:"25px"}}>Event<span className='text-danger' style={{fontWeight:"bold"}}> Handler</span></a>
    
    <div className="d-flex" role="search" style={{position:"absolute",left:'300px'}}>
      <form className="d-flex" style={{width:"500px",backgroundColor:"transparent",border:"1px solid grey"}}>
        <span className='mt-1 '><SearchIcon/></span>
      <input className=" me-2" type="search" placeholder="Search for Movies,Sports,Events" aria-label="Search" style={{width:"500px",color:"gray",border:"none",outline:"none"}} onChange={(e)=>setInputvalue(e.target.value)}/>
     
      </form>
      <button className="btn btn-outline-danger ms-4" type="button" >Search</button>
      {/* signup page */}
      
    </div>

    <div>

      {forchange==true?<div className='d-flex'>
        <p className='' onClick={offcanvashandleShow}><span style={{fontWeight:"bold",fontSize:"23px"
        }} ></span><AccountCircleIcon/></p>



      <Offcanvas show={offcanvasshow} onHide={offcanvashandleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontWeight:"bold"}}>Hey  {username}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        </Offcanvas.Body>
      </Offcanvas>


        <span className='text-dark mt-1 ms-2' style={{fontWeight:"bold",fontSize:"20px"}}>{username}</span>
        
        
      </div> : <button className='btn btn-danger text-white btn-sm rounded me-4 py-2 px-3'   style={{fontWeigh:"bold"}} onClick={handleShow}>Sign up</button>}
    
    </div>

  
    





    
{/* modal box for signup page  */}

<Modal show={show} onHide={handleClose} >

 


  <div className={action=="Login"?"bg-success" :"bg-danger"}  >
    <p className="text-white text-center mt-3" style={{fontWeight:"bold",fontSize:"20px",borderRadius:"10px"} } >{action}</p>
    
    
  </div>
       
         

         <div className=' p-5'>

         <Form className='forform'  noValidate validated={validated} onSubmit={handleSubmit}>
             

             <InputGroup className="mb-3 forsignupinput">
                     <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
                     <Form.Control type="text" placeholder='Enter a name' className='forinputfeild' required onChange={(e)=>setusername(e.target.value)}/>
                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback type="invalid">
                           Please choose a username.
                         </Form.Control.Feedback>
                   </InputGroup>
             
             {action=="Login"?<div></div>: <InputGroup className="mb-3 forsignupinput ">
                     <InputGroup.Text id="basic-addon1"><EmailIcon/></InputGroup.Text>
                     <Form.Control type="email" placeholder="Enter a Mail" className='forinputfeild' required onChange={(e)=>setemail(e.target.value)}  hasValidation/>
                 <Form.Control.Feedback type="invalid">
                           Please Enter valid Mail
                         </Form.Control.Feedback>
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                   </InputGroup>}
                  
              
             
             
             
                   <InputGroup className="mb-3 forsignupinput ">
                     <InputGroup.Text id="basic-addon1"><KeyIcon/></InputGroup.Text>
                     <Form.Control type="password" placeholder="password" className='forinputfeild' required onChange={(e)=>setpassword(e.target.value)} hasValidation/>
                 <Form.Control.Feedback type="invalid">
                           Please Enter a password
                         </Form.Control.Feedback>
                         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                   </InputGroup>
              
              
               
               <button className={action=="Login"?"btn btn-success mt-4 ms-3 " :"btn btn-danger mt-4 ms-3 "} type='submit'>{action}</button>
             </Form>
             </div>


{action=="Login"?<div className=''><p className='text-muted text-center'>Create an account ? <a href='#' className='text-decoration-none text-dark' onClick={()=>{setaction("Signup")}}>Signup</a></p></div>: <div className='text-center'>
              <p className='text-muted'>if already have an account ?<a href="#" className='text-decoration-none text-dark' onClick={()=>{setaction("Login")}}> Sign in</a></p>
             </div>}
            
             
      
            
        
      </Modal>







      
    
  </div>
<div className='container mt-4'>
  <ul className='list-unstyled list-inline '>
    <li className='list-inline-item ps-2' ><a href='' className='text-decoration-none text-dark'>Movies</a></li>
    <li className='list-inline-item ps-3'><a href='' className='text-decoration-none text-dark'>Events</a></li>
    <li className='list-inline-item ps-3'><a href='' className='text-decoration-none text-dark'>Sports</a></li>
  </ul>
  </div>
 

</nav>

    </>
  )
}

export default Navbar
