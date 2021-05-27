<template>
  <div class="compeletBg text-center">
    <div class="ml-md-5">
      <div class="successIcon text-success position-relative mx-auto mb-3">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="h4 text-primary mt-3 mb-5">
        訂單已完成，感謝您的購買。
      </div>
      <div>
        <router-link to="/products" class="btn btn-primary text-dark mx-1">繼續購買</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.compeletBg {
  background-image: url('~@/assets/images/frontend/compelet.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.successIcon {
  height: 9rem;
  width: 9rem;
  svg {
    font-size: 9rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    background-color: #FFF;
  }
}
</style>
