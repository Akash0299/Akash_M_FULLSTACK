import React from 'react';
import { useSelector } from 'react-redux';
import List from './List'

const ViewCart = () =>{
    const cart = useSelector((state) => state.carts.cart)
    console.log(cart)
    return(
        <>
         <List data={cart} />
        </>
    )
}

export default ViewCart;