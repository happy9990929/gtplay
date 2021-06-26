<template>
  <main>
    <banner />
    <cart-step />
    <div class="container mt-3">
      <div class="checkBg">
        <div class="row p-3">
          <div
            class="col-12 col-sm-6 d-flex align-items-center justify-content-center my-3"
            v-for="item in getCart"
            :key="item.product.title"
          >
            <div
              class="productImg"
              :style="`background-image: url('${item.product.imageUrl}')`"
            ></div>
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
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.name }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">電話</div>
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.tel }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">E-mail</div>
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.email }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">地址</div>
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.address }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">付款方式</div>
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.payment }}</div>
              </div>
              <div class="row my-3">
                <div class="col-5 col-lg-4">留言</div>
                <div class="col-7 col-lg-8 text-primary">{{ orderForm.message }}</div>
              </div>
            </div>
            <div class="col-12 col-lg-6 px-4 py-3">
              <div class="px-2 py-2">
                總共 <span class="text-gold">{{ getCartAmount }}</span> 件商品
              </div>
              <div class="border-top border-bottom border-light py-2">
                <div class="d-flex justify-content-between px-2 py-1">
                  <span>小計</span>
                  <span class="text-gold">{{ getCartTotal }}</span>
                </div>
                <div class="d-flex justify-content-between px-2 py-1">
                  <span>運費</span>
                  <span class="text-gold">$60</span>
                </div>
              </div>
              <div class="d-flex justify-content-between px-2 py-2">
                <span>總金額</span>
                <span class="text-gold">{{ getCartTotal + 60 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-3">
        <router-link to="/info" class="outlineBtn">
          <span class="angleLineRight mr-2"></span>
          上一步
        </router-link>
        <button type="button" class="outlineBtn next" @click="checkOut">
          確認付款
          <span class="angleLineLeft ml-2"></span>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import banner from "@/components/Banner.vue";
import cartStep from "@/components/CartStep.vue";

export default {
  components: {
    banner,
    cartStep
  },
  data() {
    return {
      orderForm: {}
    };
  },
  computed: {
    ...mapGetters(["getCart", "getCartAmount", "getCartTotal"])
  },
  created() {
    this.orderForm = JSON.parse(sessionStorage.getItem("form"));
  },
  mounted() {},
  methods: {
    checkOut() {
      console.log(this.orderForm);
      this.$store.dispatch("handOrders", this.orderForm).then(() => {
        this.$router.push("/complete");
        sessionStorage.removeItem("form");
      });
    }
  }
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
