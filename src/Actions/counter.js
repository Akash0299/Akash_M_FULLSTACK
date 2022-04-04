const increment = (countervalue) => {
    return{
    type: 'INCREMENT',
    payload: countervalue
   }
}

const decrement = (countervalue) => {
    return{
    type: 'DECREMENT',
    payload: countervalue
   }
}

export {increment,decrement}