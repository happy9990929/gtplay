import Vue from "vue";
import Vuex from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading, {
  canCancel: false,
  color: "#feecba",
  loader: "bars", // spinner/dots/bars
  width: 100,
  height: 100,
  backgroundColor: "#000",
  isFullPage: true,
  opacity: 0.5
});
Vue.use(Vuex);
import {
  apiGetProductsRequest,
  apiGetProductRequest,
  apiGetCartRequest,
  apiPostCartRequest,
  apiPatchCartRequest,
  apiDeleteCartRequest,
  apiPostOrdersRequest
} from "@/api";

const store = new Vuex.Store({
  state: {
    products: [], // 所有產品
    // 單一產品
    product: {
      num: 1,
      imageUrl: []
    },
    cart: [], // 購物車
    cartAmount: 0, // 購物車產品總數量
    cartTotal: 0 // 購物車產品總金額
  },
  mutations: {
    setProducts(state, res) {
      state.products = res;
    },
    setCart(state, res) {
      state.cart = res;
    },
    setCartAmount(state) {
      state.cartAmount = state.cart.reduce((acc, val) => acc + val.quantity, 0);
    },
    setCartTotal(state) {
      state.cartTotal = state.cart.reduce((acc, val) => acc + val.product.price * val.quantity, 0);
    },
    setProduct(state, payload) {
      state.product = {
        ...payload,
        num: 1
      };
    }
  },
  actions: {
    async handProducts({ commit }) {
      try {
        const loader = Vue.$loading.show();
        const res = await apiGetProductsRequest();
        commit("setProducts", res.data.data);
        loader.hide();
        return res.data.data; // 回傳 data 給 handProducts
      } catch (error) {
        console.log(error.response.data);
      }
    },
    handProduct({ commit }, payload) {
      const loader = Vue.$loading.show();
      const getProduct = apiGetProductRequest(payload);
      getProduct
        .then(res => {
          commit("setProduct", res.data.data);
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    handCart({ commit }) {
      const loader = Vue.$loading.show();
      const res = apiGetCartRequest();
      res
        .then(res => {
          commit("setCart", res.data.data);
          commit("setCartAmount");
          commit("setCartTotal");
          loader.hide();
        })
        .catch(err => {
          console.log(err);
        });
    },
    handPostCart({ commit }, payload) {
      const loader = Vue.$loading.show();
      const postCart = apiPostCartRequest(payload);
      postCart
        .then(() => {
          store.dispatch("handCart");
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    handPatchCart({ commit }, payload) {
      const loader = Vue.$loading.show();
      const patchCart = apiPatchCartRequest(payload);
      patchCart
        .then(() => {
          store.dispatch("handCart");
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    handDeleteCart(context, item) {
      const loader = Vue.$loading.show();
      const delCart = apiDeleteCartRequest(item.product.id);
      delCart
        .then(() => {
          store.dispatch("handCart");
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    handOrders(context, payload) {
      const loader = Vue.$loading.show();
      const postOrder = apiPostOrdersRequest(payload);
      postOrder
        .then(() => {
          store.dispatch("handCart");
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    getCart(state) {
      return state.cart;
    },
    getCartAmount(state) {
      return state.cartAmount;
    },
    getCartTotal(state) {
      return state.cartTotal;
    }
  }
});

export default store;
