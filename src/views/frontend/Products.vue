<template>
  <div>
    <div>
      <img src="@/assets/images/frontend/product.jpg" class="img-fluid">
    </div>
    <div>
      <div class="text-center mt-5 mb-3">
        <div class="titleName">產品介紹</div>
        <div class="subName">Product Description</div>
      </div>
      <div class="container mt-5">
        <ul class="list-unstyled d-flex justify-content-center flex-wrap mb-5">
          <li class="menuItem" @click="filterCategory = ''">全部商品</li>
          <li class="menuItem" v-for="item in categories" :key="item"
          @click="filterCategory = item">{{ item }}</li>
        </ul>
        <div class="row">
          <div class="col-6 col-lg-4 my-2" v-for="item in filterCategories" :key="item.id">
            <div class="productBg text-center pb-3">
              <div class="productImg" :style="`background-image: url('${item.imageUrl}');`"></div>
              <span class="productName text-primary">{{ item.title }}</span>
              <span class="text-light">${{ item.price }}</span>
              <div class="mt-3">
                <router-link :to="`/product/${ item.id }`" class="btn btn-primary mx-1">
                  查看商品
                </router-link>
                <button class="btn btn-primary mx-1" @click="addToCart(item)">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      categories: ['電吉他', '木吉他', '烏克莉莉', '其他周邊'],
      filterCategory: '',
      quantity: 1,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(api).then((res) => {
        loader.hide();
        this.products = res.data.data;
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    addToCart(item) {
      const cart = {
        product: item.id,
        quantity: this.quantity,
      };
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.post(api, cart).then(() => {
        loader.hide();
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
  },
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
  },
};
</script>
<style lang="scss" scoped>
.menuItem {
  border: 1px solid #FEECBA;
  color: #FEECBA;
  padding: .5rem 1rem;
  margin: 5px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
}
.productBg {
  background-color: #171717;
  border: 1px solid #707070;
}
.productImg {
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: cover;
  width: 70%;
  height: 45vw;
  max-height: 320px;
  margin: 0 auto 20px;
}
.productName {
  display: block;
  font-size: 1.2rem;
}
</style>
