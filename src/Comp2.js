import React from "react";
import Button2 from "./Button2";

const eventTwo = ()=>{
    console.log('Submitted!!!')
  }
const Comp2 = ({handler}) =>{
    return(
        <Button2 value="Submit!!!" handler={eventTwo}/>
    )
}

export default Comp2;