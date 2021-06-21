import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);
Vue.use(Vuex);
import { apiGetProductsRequest, apiGetShoppingRequest } from "@/api";

const store = new Vuex.Store({
  state: {
    products: [], // 所有產品
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
    handCart({ commit }) {
      const loader = Vue.$loading.show();
      const res = apiGetShoppingRequest();
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
    handDeleteCart(context, item) {
      const loader = Vue.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`;
      axios
        .delete(api)
        .then(() => {
          store.dispatch("handCart");
          loader.hide();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    handOrders({ commit }, payload) {
      const loader = Vue.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      axios
        .post(api, payload)
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
