import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes";

export const cartData = (data=[], action) => {
    // if (action.type === ADD_TO_CART) {
    //     console.log("reducer called", action);
    //     return action.data
        
    // } else{
        
    //   return "No action matched"
    // }

switch (action.type) {
    case ADD_TO_CART:
        // add to cart logic
        console.log("reducer called", action);
      return [action.data, ...data]

      case REMOVE_FROM_CART:
        // remove from cart logic
        console.log("remove from cart", action);

        // return data.length ? data.slice(0, -1) : [];
        const remainingItem= data.filter((item)=>item.id!==action.data);
      console.log("remainingItem", remainingItem);

           return [...remainingItem]

      case EMPTY_CART:
        // empty cart logic
        console.log("empty cart", action);
        data = []
        return [...data]

    default:
        // no cases matched
        return data;
}

}