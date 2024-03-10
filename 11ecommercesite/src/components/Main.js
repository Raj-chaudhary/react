import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.log("Data in main component from saga", data);
  

  useEffect(()=>{
    dispatch(productList())
  },[])


  return (
    <div>
    <div>
    <button className="border border-black px-4 py-2" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
    <div className='product-container'>
      {
        data.map((item)=><div key={item.id} className='product-item'>
          <img src={item.photo} alt="" />
          <div>Name : {item.name} </div>
          <div>Color : {item.color} </div>
          <div>Price : {item.price} </div>
          <div>Category : {item.category} </div>
          <div>Brand : {item.brand} </div>
          <div>
            <button className="border border-black px-4 py-2 mr-2" onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
            <button className="border border-black px-4 py-2" onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>

            </div>
        </div>)
      }
    </div>
  </div>
);
}

export default Main;
