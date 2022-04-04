import React,{useState} from "react";
import addcart from "./Actions/addcart";
// import { useDispatch } from "react-redux";
import store from "./Store/store";



const CounterHook = (props) =>{
    const [count,setCounter] = useState(0);

    return(
        <>
          <button style={{display: 'inline'}} onClick={()=>setCounter(count+1)}>+</button>
          <h2 style={{display: 'inline'}}>{count}</h2>
          <button style={{display: 'inline'}} onClick={()=>setCounter(count-1)}>-</button>
          <button style={{display: 'block'}} onClick={()=>store.dispatch(addcart({pname:props.bname,count:count}))}>Add to Cart</button>
        </>
    )
}

export default CounterHook;

// useDispatch(addcart({pname:props.bname,count:count}))