import React,{useState} from "react";

import Heading from './Heading';
import Details from './Details';

const FormHook = () => {
    const [fname,setFname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [location,setLocation] = useState('');
    const [isSubmit,setIsSubmit] = useState(false);
        return(
        <>
          <Heading heading="FullName:" style={{display:"inline"}}/>
          <input style={{margin:"50px"}} type="text" name="fullname" placeholder="Enter name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$" 
            onChange={(e)=>{setFname(e.target.value); setIsSubmit(false);}}/> 
          
          <Heading heading="Email:" style={{display:"inline"}}/>
          <input style={{margin:"50px"}} type="text" name="email" placeholder="Enter email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" 
           onChange={(e)=>{setEmail(e.target.value); setIsSubmit(false);}}/> 
          
          <Heading heading="Mobile No:" style={{display:"inline"}}/>
          <input style={{margin:"50px"}} type="text" name="phone" placeholder="Enter mobile no" pattern="^[1-9][0-9]{9}$" 
           onChange={(e)=>{setPhone(e.target.value); setIsSubmit(false);}}/> 
          
          <Heading heading="Location:" style={{display:"inline"}}/>
          <input style={{margin:"50px",display:"inline-block"}} type="text" name="location" placeholder="Enter location" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$" 
           onChange={(e)=>{setLocation(e.target.value); setIsSubmit(false);}}/> 
          
          <button onClick={(e) => setIsSubmit(true)} style={{marginBottom:"20px"}}>Submit</button>  
          
          {isSubmit ? <Details fname={fname} mail={email} phone={phone} location={location} />:<Details />}
        </>
        )
}

export default FormHook;