<template>
  <div class="p-4">
    <h3 class="my-4">圖片儲存庫</h3>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">圖片縮圖</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in storages" :key="item.id">
                <td>
                  <img :src="item.path" style="width: 100px;">
                </td>
                <td>
                  <button class="btn btn-outline-danger mx-1" @click="openModel(item)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination :pages="pagination" @go-page="getData"/>
        <div
          id="deleteModal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog"
            role="document"
          >
            <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
                <h5
                  id="exampleModalLabel"
                  class="modal-title"
                >
                  <span>刪除資料</span>
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                是否刪除該筆資料 (刪除後將無法恢復)。
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  data-dismiss="modal"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deleteData"
                >
                  確認刪除
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
/* global $ */
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      storages: {},
      temData: {},
      pagination: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.get(api).then((res) => {
        this.storages = res.data.data;
        this.pagination = res.data.meta.pagination;
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
    openModel(item) {
      $('#deleteModal').modal('show');
      this.temData = { ...item };
    },
    deleteData() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${this.temData.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        $('#deleteModal').modal('hide');
        loader.hide();
        this.getData();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
  },
};
</script>
