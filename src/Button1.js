import React from "react";

const Button1 = ({value,handler,tid})=>{
    return(
        <button data-testid={tid} onClick={(e) => handler(e)}>{value}</button>
    )
}

export default Button1;