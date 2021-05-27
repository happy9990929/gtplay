<template>
  <main>
    <Banner/>
    <div class="text-center mt-5 mb-3">
      <div class="titleName">購物車</div>
      <div class="subName">Shopping Cart</div>
    </div>
    <cart-step/>
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
                <div class="cartItem"
                :style="`background-image: url('${item.product.imageUrl}')`"></div>
              </td>
              <td class="align-middle">{{item.product.title}}</td>
              <td class="align-middle">{{item.product.price}}</td>
              <td class="align-middle">
                {{item.quantity}}
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
                總共 <span class="text-primary">{{ amount }}</span> 件商品
              </span>
              <span class="h5 text-primary mx-3 total">
                總金額 ${{ cartTotal }}
              </span>
            </td>
          </tfoot>
        </table>
      </div>
      <div class="d-flex justify-content-between">
        <div class="btn border-light">
          <i class="fas fa-angle-left"></i>
          繼續選購
        </div>
        <router-link to="info" class="btn btn-primary text-dark">
          下一步
          <i class="fas fa-angle-right"></i>
        </router-link>
      </div>
    </div>
  </main>
</template>
<script>
import cartStep from '@/components/cartStep.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    cartStep, Banner,
  },
  data() {
    return {
      cart: [],
      amount: 0,
      cartTotal: 0,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        loader.hide();
        console.log(res);
        this.cart = res.data.data;
        this.cartAmount();
      }).catch((error) => {
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
      this.$http.delete(api).then((res) => {
        loader.hide();
        this.getCart();
        this.cartAmount();
        console.log(res);
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
  },
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
</style>
