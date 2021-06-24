import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec`
});

// 產品
const getProductsRequest = () => request.get("/products");
const getProductRequest = data => request.get(`/product/${data}`);

// 購物車
const getCartRequest = () => request.get("/shopping");
const postCartRequest = data => request.post("/shopping", data);
const patchCartRequest = data => request.patch("/shopping", data);
const deleteCartRequest = data => request.delete(`/shopping/${data}`);

// 訂單
const postOrdersRequest = data => request.post("/orders", data);

export {
  getProductsRequest,
  getProductRequest,
  getCartRequest,
  postCartRequest,
  patchCartRequest,
  deleteCartRequest,
  postOrdersRequest
};
