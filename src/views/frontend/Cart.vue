<template>
  <main>
    <banner />
    <cart-step />
    <div class="container">
      <div class="table-responsive mt-5">
        <table class="table text-center">
          <thead class="thead mb-1">
            <th>商品</th>
            <th></th>
            <th>單價</th>
            <th>數量</th>
            <th>總價</th>
            <th>操作</th>
          </thead>
          <tbody class="tbody">
            <tr v-for="item in cart" :key="item.id">
              <td>
                <div
                  class="cartItem"
                  :style="`background-image: url('${item.product.imageUrl}')`"
                ></div>
              </td>
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.product.price }}</td>
              <td class="align-middle">
                {{ item.quantity }}
              </td>
              <td class="align-middle">{{ item.quantity * item.product.price }}</td>
              <td class="align-middle">
                <span class="pointer" @click="deleteCart(item)">
                  <i class="fas fa-trash-alt"></i>
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot class="tfoot text-right">
            <td colspan="6">
              <span>
                總共 <span class="text-gold">{{ amount }}</span> 件商品
              </span>
              <span class="h5 text-gold mx-3 total"> 總金額 ${{ cartTotal }} </span>
            </td>
          </tfoot>
        </table>
      </div>
      <div class="d-flex justify-content-between">
        <router-link to="/products" class="outlineBtn">
          <span class="angleLineRight mr-2"></span>
          繼續選購
        </router-link>
        <router-link to="/info" class="outlineBtn">
          下一步
          <span class="angleLineLeft ml-2"></span>
        </router-link>
      </div>
    </div>
  </main>
</template>
<script>
import cartStep from "@/components/cartStep.vue";
import banner from "@/components/Banner.vue";

export default {
  components: {
    cartStep,
    banner
  },
  data() {
    return {
      cart: [],
      amount: 0,
      cartTotal: 0
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(api)
        .then(res => {
          loader.hide();
          console.log(res);
          this.cart = res.data.data;
          this.cartAmount();
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    },
    cartAmount() {
      this.amount = this.cart.reduce((acc, val) => acc + val.quantity, 0);
      this.cartTotal = this.cart.reduce((acc, val) => acc + val.product.price * val.quantity, 0);
    },
    deleteCart(item) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`;
      this.$http
        .delete(api)
        .then(res => {
          loader.hide();
          this.getCart();
          this.cartAmount();
          console.log(res);
        })
        .catch(error => {
          loader.hide();
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.cartItem {
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: center;
  background-size: cover;
  width: 100px;
  height: 150px;
  margin: 0 auto;
}
.tfoot {
  background-color: #171717;
  border-top: 10px solid #000;
}
.numInput {
  width: 3rem;
  border-width: 1px;
  background-color: transparent;
}
.pointer {
  cursor: pointer;
}
.tbody {
  color: #fff;
}
</style>
