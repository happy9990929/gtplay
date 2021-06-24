<template>
  <div class="d-flex align-items-center justify-content-center flex-wrap my-5">
    <div class="d-flex">
      <div :class="['step', cartActive]">1</div>
      <div :class="['stepText', cartActive]">確認購物車</div>
    </div>
    <div class="stepArrow d-none d-md-block">
      <i class="fas fa-angle-right"></i>
    </div>
    <div class="d-flex">
      <div :class="['step', infoActive]">2</div>
      <div :class="['stepText', infoActive]">填寫資料</div>
    </div>
    <div class="stepArrow d-none d-md-block">
      <i class="fas fa-angle-right"></i>
    </div>
    <div class="d-flex">
      <div :class="['step', checkoutActive]">3</div>
      <div :class="['stepText', checkoutActive]">確認訂單</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartActive() {
      return this.$route.name === "Cart" ? "active" : "";
    },
    infoActive() {
      return this.$route.name === "Info" ? "active" : "";
    },
    checkoutActive() {
      return this.$route.name === "Checkout" ? "active" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.step {
  font-size: 1.2rem;
  color: #000;
  background-color: #b7b7b7;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  &.active {
    background-color: #feecba;
  }
}
.stepText {
  color: #b7b7b7;
  font-size: 1.2rem;
  border-bottom: 2px solid;
  margin: 0 0.6rem;
  &.active {
    color: #feecba;
    border-color: #feecba;
  }
}
.stepArrow {
  font-size: 1.8rem;
  color: #b7b7b7;
  margin: 0 1.5rem;
}
</style>
