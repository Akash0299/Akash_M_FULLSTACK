const initialState = {
    cart : []
}

export default function cartReducer(state=initialState,action){
    switch(action.type){
        case "ADDCART":
            console.log(action.payload)
            const newstate={...state,cart:[...state.cart,action.payload]}
            console.log(newstate.cart)
            return newstate
        default:
            return {...state};
    }
}