<template>
  <div class="d-flex align-items-center justify-content-center flex-wrap">
    <div class="d-flex my-3">
      <div class="step" :class="this.$route.path === '/cart' ? 'active' : ''">1</div>
      <div class="stepText" :class="this.$route.path === '/cart' ? 'active' : ''">確認購物車</div>
    </div>
    <div class="stepArrow d-none d-md-block" :class="this.$route.path === '/cart' ? 'active' : ''">
      <i class="fas fa-angle-right"></i>
    </div>
    <div class="d-flex my-3">
      <div class="step" :class="this.$route.path === '/info' ? 'active' : ''">2</div>
      <div class="stepText" :class="this.$route.path === '/info' ? 'active' : ''">填寫資料</div>
    </div>
    <div class="stepArrow d-none d-md-block" :class="this.$route.path === '/info' ? 'active' : ''">
      <i class="fas fa-angle-right"></i>
    </div>
    <div class="d-flex my-3">
      <div class="step" :class="this.$route.name === 'Checkout' ? 'active' : ''">3</div>
      <div class="stepText" :class="this.$route.name === 'Checkout' ? 'active' : ''">確認訂單</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.name.toLowerCase());
  },
};
</script>

<style>

</style>
