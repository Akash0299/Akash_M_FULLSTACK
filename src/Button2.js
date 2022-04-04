import React from "react";

const Button2 = ({value,handler})=>{
    return(
        <button onClick={(e) => handler(e)}>{value}</button>
    )
}

export default Button2;