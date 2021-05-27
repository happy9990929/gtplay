<template>
  <main>
    <div>
      <img src="@/assets/images/frontend/cart.jpg" class="img-fluid">
    </div>
    <div class="text-center mt-5 mb-3">
      <div class="titleName">訂購人資料</div>
      <div class="subName">Customer Information</div>
    </div>
    <cart-step/>
    <div class="container mt-5">
      <validation-observer v-slot="{ invalid }">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="userName">姓名</label>
                  <input type="text" class="form-control" id="userName" :class="classes"
                  name="姓名" v-model="form.name">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                  <label for="tel">電話</label>
                  <input id="tel" type="tel" class="form-control" :class="classes"
                  name="電話" v-model="form.tel">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                  <label for="email">E-mail</label>
                  <input type="email" class="form-control" id="email" :class="classes"
                  name="email" v-model="form.email">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="address">地址</label>
                  <input type="text" class="form-control" id="address" :class="classes"
                  name="地址" v-model="form.address">
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="payment">付款方式</label>
                  <select id="payment" class="form-control" :class="classes"
                  name="付款方式" v-model="form.payment">
                    <option value="" disabled>
                        請選擇付款方式
                    </option>
                    <option v-for="item in pay" :key="item" :value="item">{{ item }}</option>
                  </select>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="msg">留言</label>
                <textarea  type="text" class="form-control" id="msg" rows="8"
                v-model="form.message"></textarea>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between my-3">
            <router-link to="cart" class="btn border-light">
              <i class="fas fa-angle-left"></i>
              上一步
            </router-link>
            <button type="submit" class="btn btn-primary text-dark" :disabled="invalid">
              下一步
              <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </form>
      </validation-observer>
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
      form: {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
        message: '',
      },
      pay: ['WebATM', 'ATM', 'CVS', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
    };
  },
  methods: {
    getCart() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        loader.hide();
        console.log(res);
        this.cart = res.data.data;
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    submitForm() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(api, this.form).then((res) => {
        loader.hide();
        this.getCart();
        this.$router.push(`checkout/${res.data.data.id}`);
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
.form-control {
  background-color: transparent;
  color: #FFF;
  &:focus {
    background-color: transparent;
  }
}
</style>
