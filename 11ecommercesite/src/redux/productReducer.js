import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionTypes";

export const productData = (data = [], action) => {
   
switch (action.type) {

    case SET_PRODUCT_LIST:
        // add to cart logic
        console.log("set product list", action);
      return [...action.data]

     

    default:
        // no cases matched
        return data
}

}