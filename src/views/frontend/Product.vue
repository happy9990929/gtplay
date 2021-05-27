<template>
  <main>
    <section class="d-xl-flex">
      <div class="productBox position-relative py-3 py-xl-0">
        <div class="productItem">
          <div class="productItemImg">
            <img :src="`${product.imageUrl}`" class="img-fluid">
          </div>
        </div>
        <div class="watermark">
          <div class="d-flex align-items-center">{{ product.title }}</div>
        </div>
      </div>
      <div class="productInfo p-3 p-xl-5 d-xl-flex align-items-xl-center">
        <div class="w-100">
          <div class="border-bottom border-secondary pb-2">
            <div class="productTitle font-weight-bold">
              {{ product.title }}
            </div>
            {{ product.description }}
          </div>
          <div class="py-3 border-bottom border-secondary">
            <div class="d-flex align-items-center mb-3">
              顏色:
              <div class="d-flex ml-3">
                <div class="colorItem blue"></div>
                <div class="colorItem red"></div>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div>數量:</div>
              <div class="d-flex align-items-center">
                <div class="d-flex mx-3">
                  <button type="button" class="btn border border-secondary rounded-0 py-0"
                  @click="updateCart(product.id, product.num-1)">
                    <i class="fas fa-minus"></i>
                  </button>
                  <input type="number" class="numInput border-left-0 border-right-0 border-secondary
                  text-center" :value="product.num"/>
                  <button type="button" class="btn border border-secondary rounded-0 py-0"
                  @click="updateCart(product.id, product.num+1)">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <!-- <div>還剩22件</div> -->
              </div>
            </div>
          </div>
          <div class="py-3 d-flex align-items-center justify-content-between">
            <div class="text-danger h4">NT ${{ product.price }}</div>
            <button class="btn addCart" @click="addToCart(product.id, product.num)">
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
export default {
  data() {
    return {
      product: {
        num: 1,
        imageUrl: [],
      },
      cart: [],
    };
  },
  created() {
    this.getProduct();
    // console.log(this.$route);
  },
  methods: {
    getProduct() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${this.$route.params.id}`;
      this.$http.get(api).then((res) => {
        loader.hide();
        this.product = {
          ...res.data.data,
          num: 1,
        };
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    addToCart(id, quantity = 1) {
      const cart = {
        product: id,
        quantity,
      };
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.post(api, cart).then(() => {
        loader.hide();
        this.getCart();
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    updateCart(id, quantity) {
      const cart = {
        product: id,
        quantity,
      };
      this.product.num = quantity;
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.patch(api, cart).then(() => {
        loader.hide();
        this.getCart();
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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
  color: rgba(255,255,255,.1);
  font-weight: bold;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.productInfo {
  background-color: #FEECBA;
  color: #000;
}
.productTitle {
  font-size: 1.8rem;
}
.colorItem {
  border-radius: 100%;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 .25rem;
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
.addCart {
  color: #570000;
  border: 1px solid #570000;
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
  background-image: url('~@/assets/images/frontend/1.png');
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
