
const addcart = (product) => {
    return{
    type: 'ADDCART',
    payload: product
   }
}


export default addcart;
