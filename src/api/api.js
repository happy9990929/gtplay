import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec`
});

const getProductsRequest = () => request.get("/products");
const getShoppingRequest = () => request.get("/shopping");
export { getProductsRequest, getShoppingRequest };
