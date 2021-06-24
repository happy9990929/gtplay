<template>
  <div>
    <banner />
    <div>
      <div class="container my-5">
        <ul class="d-flex justify-content-center flex-wrap">
          <li
            :class="['menuItem', { active: currentCategory === '' }]"
            @click="currentCategory = ''"
          >
            全部商品
          </li>
          <li
            v-for="item in categories"
            :key="item"
            :class="['menuItem', { active: currentCategory === item }]"
            @click="currentCategory = item"
          >
            {{ item }}
          </li>
        </ul>
        <div class="row">
          <div class="col-6 col-lg-4 my-4 px-4" v-for="item in filterCategories" :key="item.id">
            <router-link :to="`/product/${item.id}`" class="productBg text-center pb-3 d-block">
              <div class="productImg" :style="`background-image: url('${item.imageUrl}');`"></div>
              <span class="productName">{{ item.title }}</span>
              <span class="text-light">${{ item.price }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "@/components/Banner.vue";
export default {
  components: {
    banner
  },
  data() {
    return {
      products: [], // 所有產品
      categories: [], // 所有類別
      currentCategory: "" // 目前的類別
    };
  },
  created() {
    this.$store.dispatch("handProducts").then(res => {
      this.products = res; // 取得產品
      this.getCategories(); // 取得類別
    });
  },
  methods: {
    getCategories() {
      let allType = this.products.map(item => {
        return item.category;
      });
      let type = allType.filter((item, idx, arr) => {
        return arr.indexOf(item) === idx;
      });
      this.categories.push(...type);
    }
  },
  computed: {
    filterCategories() {
      return this.products.filter(item => {
        return item.category.includes(this.currentCategory);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.menuItem {
  border-color: #605e59;
  border: 1px solid;
  color: #95928a;
  padding: 0.5rem 1rem;
  margin: 5px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #feecba;
    color: #feecba;
  }
  &.active {
    border-color: #feecba;
    color: #feecba;
  }
}
.productBg {
  background-color: #171717;
  border: 1px solid;
  border-color: #605e59;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border-color: #feecba;
    .productName {
      color: #feecba;
    }
  }
}
.productImg {
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: cover;
  width: 55%;
  height: 45vw;
  max-height: 320px;
  margin: 0 auto 20px;
}
.productName {
  display: block;
  font-size: 1.2rem;
  color: #fff;
}
</style>
