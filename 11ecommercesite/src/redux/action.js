import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./actionTypes"


export const addToCart = (data) => { 
    console.log("action called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeFromCart = (data) => { 
    console.log("action called remove from cart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}
export const emptyCart = (data) => { 
    console.log("action called", data)
    return {
        type: EMPTY_CART,
        
    }
}