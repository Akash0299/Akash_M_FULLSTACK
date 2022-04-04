import React from "react";
import Button1 from "./Button1";

const eventThree = ()=>{
    console.log('Bye!!!')
  }
const Comp3 = ({handler}) =>{
    return(
        <Button1 value="Click Me!!!" handler={eventThree}/>
    )
}

export default Comp3;