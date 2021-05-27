<template>
  <main>
    <div>
      <img src="@/assets/images/frontend/cart.jpg" class="img-fluid">
    </div>
    <div class="text-center mt-5 mb-3">
      <div class="titleName">確認訂單</div>
      <div class="subName">Confirm Order</div>
    </div>
    <cart-step/>
    <div class="container mt-3">
      <div class="checkBg">
        <div class="row p-3">
          <div
          class="col-12 col-sm-6 d-flex align-items-center justify-content-center my-3"
          v-for="item in order.products"
          :key="item + 1"
          >
            <div class="productImg"
            :style="`background-image: url('${item.product.imageUrl}')`"></div>
            <div class="d-flex">
              <div class="mx-3">
                <div class="text-primary">{{ item.product.title }}</div>
                <div>{{ item.product.price }}</div>
              </div>
              <div class="text-primary">x {{ item.quantity }}</div>
            </div>
          </div>
        </div>
        <div class="container-fluid border-top border-light">
          <div class="row">
            <div class="col-12 col-lg-6 px-4 py-3 text-break border-right border-light">
              <div class="row my-3">
                <div class="col-5 col-lg-4">姓名</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.user.name }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">電話</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.user.tel }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">E-mail</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.user.email }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">地址</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.user.address }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">付款方式</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.payment }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">留言</div>
                <div class="col-7 col-lg-8 text-primary">{{ order.message }}</div>
              </div>
            </div>
            <div class="col-12 col-lg-6 px-4 py-3">
              <div class="px-2 py-2">總共 <span class="text-primary">6</span> 件商品</div>
              <div class="border-top border-bottom border-light py-2">
                <div class="d-flex justify-content-between px-2 py-1">
                  <span>小計</span>
                  <span>{{ order.amount }}</span>
                </div>
                <div class="d-flex justify-content-between px-2 py-1">
                  <span>運費</span>
                  <span>$60</span>
                </div>
              </div>
              <div class="d-flex justify-content-between px-2 py-2 text-primary">
                <span>總金額</span>
                <span>{{ order.amount + 60 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end my-3">
        <router-link to="/complete" class="btn btn-primary text-dark">
          確認付款
          <i class="fas fa-angle-right"></i>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import cartStep from '@/components/cartStep.vue';

export default {
  components: {
    cartStep,
  },
  data() {
    return {
      order: [],
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.$route.params.id}`;
      this.$http.get(api).then((res) => {
        loader.hide();
        this.order = res.data.data;
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
.checkBg {
  background-color: #171717;
  border: 1px solid #707070;
}
.productImg {
  width: 100px;
  height: 150px;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: cover;
}
.label {
  min-width: 100px;
}
</style>
