<template>
  <main>
    <banner />
    <cart-step />
    <div class="container mt-5 animate__animated animate__fadeIn">
      <validation-observer v-slot="{ invalid }">
        <form>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="userName">姓名</label>
                  <input
                    type="text"
                    :class="['form-control', classes]"
                    id="userName"
                    name="姓名"
                    v-model="form.name"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                  <label for="tel">電話</label>
                  <input
                    id="tel"
                    type="tel"
                    :class="['form-control', classes]"
                    name="電話"
                    v-model="form.tel"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    :class="['form-control', classes]"
                    name="email"
                    v-model="form.email"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="address">地址</label>
                  <input
                    type="text"
                    id="address"
                    :class="['form-control', classes]"
                    name="地址"
                    v-model="form.address"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <label for="payment">付款方式</label>
                  <select
                    id="payment"
                    :class="['form-control', classes]"
                    name="付款方式"
                    v-model="form.payment"
                  >
                    <option value="" disabled>
                      請選擇付款方式
                    </option>
                    <option v-for="item in pay" :key="item" :value="item" class="text-dark">{{ item }}</option>
                  </select>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="msg">留言</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="msg"
                  rows="8"
                  v-model="form.message"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between my-3">
            <router-link to="/cart" class="outlineBtn">
              <span class="angleLineRight mr-2"></span>
              上一步
            </router-link>
            <button type="button" @click="submitForm" class="outlineBtn next" :disabled="invalid">
              下一步
              <span class="angleLineLeft ml-2"></span>
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </main>
</template>

<script>
import banner from "@/components/Banner.vue";
import cartStep from "@/components/CartStep.vue";

export default {
  components: {
    banner,
    cartStep
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        email: "",
        address: "",
        payment: "",
        message: ""
      },
      pay: ["WebATM", "ATM", "CVS", "Barcode", "Credit", "ApplePay", "GooglePay"]
    };
  },
  methods: {
    submitForm() {
      sessionStorage.setItem("form", JSON.stringify(this.form));
      this.$router.push("/checkout");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-control {
  background-color: transparent;
  color: #fff;
  &:focus {
    background-color: transparent;
  }
}
</style>
