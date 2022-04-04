import React from "react";
// import Button1 from "./Button1";

const eventOne = ()=>{
    console.log('Hey!!!')
  }
const d="Top Offers of the Month";

const Comp1 = ({getData}) =>{
    return(
        <button onClick={()=>getData(d)}>Click Me!!!</button>
    )
}

export default Comp1;