import React from "react";
import Heading from "./Heading";

const Cart = ({count,bname,style,isClicked}) =>{
    return(
         <Heading heading={`${count} ${bname} added to cart`} style={style}/>
    )
}

export default Cart;