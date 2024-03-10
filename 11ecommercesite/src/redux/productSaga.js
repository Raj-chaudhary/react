import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./actionTypes";

function* getProducts() {
  let data = yield fetch(`http://localhost:3500/product`);
  data = yield data.json();
  console.log("action called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  console.log("search product action is called", data)
  console.log("search product", result)
  yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
