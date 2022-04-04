import React from "react";

const Button = ({count,bname,value,handler})=>{ 
    return( 
       <button name={bname} onClick={(e) => handler(e.target.name,count)}>{value}</button>
    )
}

export default Button;