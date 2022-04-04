import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement} from './Actions/counter';

const CounterRedux = () =>{

    const dispatch = useDispatch();

    const state = useSelector(state => state.counters) 
    return(
        <>
          <button onClick={() => dispatch(increment(10))}>+</button>
          <span>{state.count}</span>
          <button onClick={() => dispatch(decrement(10))}>-</button>
        </>
    )
}

export default CounterRedux;