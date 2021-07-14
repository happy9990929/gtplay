<template>
  <div
    class="inpageBanner align-items-center align-items-lg-end"
    :style="`background-image: url('${publicPath}images/${bannerImg}.jpg');`"
  >
    <div class="text-center mt-5 mb-lg-5 animate__animated animate__bounceIn">
      <div class="titleName">{{ cnTitle }}</div>
      <div class="subName">{{ enTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    cnTitle() {
      switch (this.$route.name) {
        case "Products":
          return "產品介紹";
          break;
        case "Cart":
          return "購物車";
          break;
        case "Info":
          return "訂購人資料";
          break;
        case "Checkout":
          return "確認訂單";
          break;
        default:
          return "產品介紹";
      }
    },
    enTitle() {
      switch (this.$route.name) {
        case "Products":
          return "Products";
          break;
        case "/Cart":
          return "Shopping Cart";
          break;
        case "Info":
          return "Customer Information";
          break;
        case "Checkout":
          return "Confirm Order";
          break;
        default:
          return "Products";
      }
    },
    bannerImg() {
      switch (this.$route.name) {
        case "Products":
          return "products";
          break;
        case "Cart":
          return "cart";
          break;
        case "Info":
          return "info";
          break;
        case "Checkout":
          return "checkout";
          break;
        default:
          return "products";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.inpageBanner {
  height: 200px;
  background-position-x: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #383838;
   @media screen and (min-width: 768px) {
    height: 350px;
  }
}
.titleName {
  font-size: 1.5rem;
  color: #feecba;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
}
.subName {
  color: rgba(255, 255, 255, 0.1);
  font-family: Arial;
  font-size: 3rem;
  margin-top: -3rem;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
}
</style>
