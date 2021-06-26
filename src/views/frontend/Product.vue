<template>
  <main>
    <section class="d-xl-flex">
      <div class="productBox position-relative py-3 py-xl-0">
        <div class="productItem">
          <div class="productItemImg">
            <img :src="`${getProduct.imageUrl}`" class="img-fluid" />
          </div>
        </div>
        <div class="watermark">
          <div class="d-flex align-items-center">{{ getProduct.title }}</div>
        </div>
      </div>
      <div class="productInfo p-3 p-xl-5 d-xl-flex align-items-xl-center">
        <div class="w-100">
          <div class="border-bottom border-secondary pb-2">
            <div class="productTitle font-weight-bold">
              {{ getProduct.title }}
            </div>
            {{ getProduct.description }}
          </div>
          <div class="py-3 border-bottom border-secondary">
            <div class="d-flex mb-3">
              介紹:
              <div class="ml-3 content" v-html="getProduct.content"></div>
            </div>
            <div class="d-flex align-items-center">
              <div>數量:</div>
              <div class="d-flex align-items-center">
                <div class="d-flex mx-3">
                  <button type="button" class="numBtn" @click="setQuantity">
                    <i class="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    class="numInput border-left-0 border-right-0 border-secondary
                  text-center"
                    v-model="num"
                  />
                  <button type="button" class="numBtn" @click="num++">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3 d-flex align-items-center justify-content-between">
            <div class="text-danger h4">NT ${{ getProduct.price }}</div>
            <button class="btn addCart" @click="addToCart">
              <i class="fas fa-shopping-cart"></i>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="otherProducts py-3 py-xl-5">
      <div class="container-fluid">
        <div class="mb-3">
          你可能也會喜歡...
        </div>
        <div class="d-flex">
          <div class="productBg text-center pb-3">
            <div class="productImg"></div>
            <span class="productName text-primary">Awime x19</span>
            <span>NT $32000</span>
          </div>
          <div class="productBg text-center pb-3">
            <div class="productImg"></div>
            <span class="productName text-primary">Awime x19</span>
            <span>NT $32000</span>
          </div>
          <div class="productBg text-center pb-3">
            <div class="productImg"></div>
            <span class="productName text-primary">Awime x19</span>
            <span>NT $32000</span>
          </div>
          <div class="productBg text-center pb-3">
            <div class="productImg"></div>
            <span class="productName text-primary">Awime x19</span>
            <span>NT $32000</span>
          </div>
          <div class="productBg text-center pb-3">
            <div class="productImg"></div>
            <span class="productName text-primary">Awime x19</span>
            <span>NT $32000</span>
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      num: 1 // 數量
    };
  },
  computed: {
    ...mapGetters(["getProduct", "getCart"])
  },
  created() {
    // this.getProduct();
    this.$store.dispatch("handProduct", this.$route.params.id);
  },
  methods: {
    addToCart() {
      const cart = {
        product: this.getProduct.id,
        quantity: this.num
      };
      let cartIdArr = this.getCart.map(item => {
        return item.product.id;
      });
      if (cartIdArr.includes(cart.product)) {
        this.$store.dispatch("handPatchCart", cart);
      } else {
        this.$store.dispatch("handPostCart", cart);
      }
    },
    // 數量按鈕
    setQuantity() {
      this.num--;
      this.num = this.num < 0 ? 0 : this.num;
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .content {
  p {
    margin-bottom: 0;
  }
}
.productBox {
  background-color: #000;
  width: 100%;
  height: 100vh;
}
.productItem {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.productItemImg {
  transform: rotate(45deg);
  width: 30%;
}
.watermark {
  position: absolute;
  bottom: 0;
  font-size: 6rem;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.productInfo {
  background-color: #feecba;
  color: #000;
}
.productTitle {
  font-size: 1.8rem;
}
.colorItem {
  border-radius: 100%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.25rem;
  &.blue {
    background-color: blue;
  }
  &.red {
    background-color: red;
  }
}
.numInput {
  width: 3rem;
  border-width: 1px;
  background-color: transparent;
}
.numBtn {
  color: #feecba;
  border: 1px solid #570000;
  background-color: #531000;
  &:hover {
    color: #feecba;
    border: 1px solid #531000;
    background-color: #000;
  }
}
.addCart {
  color: #570000;
  border: 1px solid #570000;
  &:hover {
    color: #feecba;
    border: 1px solid #feecba;
    background-color: #000;
  }
}
.otherProducts {
  background-color: #171717;
}
.productBg {
  background-color: #171717;
  border: 1px solid #707070;
  width: 15%;
}
.productImg {
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: cover;
  background-image: url("~@/assets/images/frontend/1.png");
  width: 70%;
  height: 45vw;
  max-height: 320px;
  margin: 0 auto 20px;
}
.productName {
  display: block;
  font-size: 1.2rem;
}
@media screen and (min-width: 1200px) {
  .productBox {
    width: 55%;
  }
  .productInfo {
    width: 45%;
  }
}
</style>
