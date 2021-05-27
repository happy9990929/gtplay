<template>
  <div class="p-4">
    <h3 class="my-4">訂單列表</h3>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">下單時間</th>
                <th scope="col">購買款項</th>
                <th scope="col">付款方式</th>
                <th scope="col">應付金額</th>
                <th scope="col">是否付款</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orders" :key="item.id">
                <td>{{ item.created.datetime }}</td>
                <td>
                  <ul class="list-unstyled mb-0">
                    <li
                      v-for="(product, i) in item.products"
                      :key="i"
                    >
                      {{ product.product.title }} 數量：{{ product.quantity }}
                      {{ product.product.unit }}
                    </li>
                  </ul>
                </td>
                <td>{{ item.payment }}</td>
                <td>{{ item.amount }}</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input"
                    id="customSwitch1" :checkd="item.paid" @change="setOrderPaid(item)">
                    <label class="custom-control-label" for="customSwitch1"></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination :pages="pagination" @go-page="getOrders"/>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orders: {
      },
      pagination: {},
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        loader.hide();
        this.orders = res.data.data;
        this.pagination = res.data.meta.pagination;
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    setOrderPaid(item) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      this.$http.patch(api, item.id).then((res) => {
        loader.hide();
        console.log(res);
        this.getOrders();
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
  },
};
</script>
