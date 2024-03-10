 import { PRODUCT_LIST, SEARCH_PRODUCT } from "./actionTypes"

export const productList =  () => { 
    // let data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    // data = await data.json();

    //console.log("action called", data)
    return {
        type: PRODUCT_LIST,
       
    }
}



export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
       query
    }
}
