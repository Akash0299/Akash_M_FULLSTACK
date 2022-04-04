import React from "react";
import Button1 from "./Button1";
import Heading from "./Heading";

const islogged=true
const Condition = ({handler}) => {
    return(
       <>
         { islogged?<><Heading heading="Welcome Clementine"/><Button1 value="Sign Out" handler={handler}/></>:<Button1 value="Login" handler={handler}/>}
       </>
    )
}

export default Condition;