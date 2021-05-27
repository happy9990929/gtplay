<template>
  <div class="p-4">
    <h3 class="my-4">產品列表</h3>
    <div class="card">
      <div class="card-body">
        <button class="btn btn-orange" @click="openModal('new')">
          <i class="fas fa-plus-circle"></i>
          建立新的產品
        </button>
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">產品</th>
                <th scope="col">產品名稱</th>
                <th scope="col">分類</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">啟用</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>
                  <div
                    class="productImg"
                    :style="`backgroundImage:url('${item.imageUrl[0]}')`">
                  </div>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input"
                    :checked="item.enabled" disabled>
                    <label class="custom-control-label"></label>
                  </div>
                </td>
                <td class="text-right text-nowrap">
                  <button class="btn btn-outline-orange mx-1" @click="openModal('edit', item)">
                    <i class="far fa-edit"></i>
                  </button>
                  <button class="btn btn-outline-danger mx-1" @click="openModal('delete', item)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination :pages="pagination" @go-page="getProducts"/>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="product"
      tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <div v-if="isNew">
              <h5 class="modal-title">新增產品</h5>
            </div>
            <div v-else>
              <h5 class="modal-title">編輯 {{ temProduct.title }} 產品</h5>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group"
                  v-for="i in 5"
                  :key="i+'img'"
                >
                  <label :for="`img${i}`">輸入圖片網址</label>
                  <input type="text" placeholder="請輸入圖片連結" :id="`img${i}`"
                  class="form-control" v-model="temProduct.imageUrl[i-1]">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <span v-if="status.fileUploading">
                      <i class="fas fa-spinner fa-spin"/>
                    </span>
                  </label>
                  <input
                  type="file"
                  id="customFile"
                  ref="file"
                  class="form-control"
                  @change="uploadFile"
                  >
                </div>
                <img
                    class="img-fluid"
                    :src="temProduct.imageUrl[0]"
                  >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" type="text" placeholder="請輸入標題"
                  required="required" class="form-control" v-model="temProduct.title">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" type="text" placeholder="請輸入分類" required="required"
                     class="form-control" v-model="temProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="unit">單位</label>
                    <input id="unit" type="text" placeholder="請輸入單位"
                    class="form-control" v-model="temProduct.unit">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" type="number" placeholder="請輸入原價" required="required"
                     class="form-control" v-model="temProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" type="number" placeholder="請輸入售價"
                    class="form-control" v-model="temProduct.price">
                  </div>
                </div>
                <hr/>
                <div class="form-group">
                  <label for="description">產品說明</label>
                  <textarea id="description" type="text" placeholder="請輸入產品說明"
                   required="required" class="form-control" v-model="temProduct.description">
                   </textarea>
                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <VueEditor v-model="temProduct.content"/>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="is_enabled" type="checkbox"
                    class="form-check-input" v-model="temProduct.enabled">
                    <label for="is_enabled" class="form-check-label">是否啟用</label>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-orange" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="delProduct"
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
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-danger">{{ temProduct.title }}</strong> 商品(刪除後將無法恢復)。
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
              @click="delProduct"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import { VueEditor } from 'vue2-editor';

export default {
  components: {
    Pagination,
    VueEditor,
  },
  data() {
    return {
      products: [],
      pagination: {},
      temProduct: {
        imageUrl: [],
      },
      isNew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // 預設為第一頁
    getProducts(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
    getDetails(id) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.get(api).then((res) => {
        this.temProduct = res.data.data;
        $('#product').modal('show');
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.temProduct = {
            imageUrl: [],
          };
          this.isNew = true;
          $('#product').modal('show');
          break;
        case 'edit':
          this.isNew = false;
          this.getDetails(item.id);
          break;
        case 'delete':
          this.temProduct = { ...item };
          $('#delProduct').modal('show');
          break;
        default:
          break;
      }
    },
    updateProduct() {
      const loader = this.$loading.show();
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.temProduct.id}`;
        httpMethod = 'patch';
      }
      this.$http[httpMethod](api, this.temProduct).then(() => {
        $('#product').modal('hide');
        this.getProducts();
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
    delProduct() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.temProduct.id}`;
      this.$http.delete(api).then(() => {
        loader.hide();
        $('#delProduct').modal('hide');
        this.getProducts();
      }).catch((error) => {
        loader.hide();
        console.log(error);
      });
    },
    uploadFile() {
      // 選取DOM中的檔案資訊
      const uploadFile = this.$refs.file.files[0];
      const formData = new FormData();
      // file為欄位
      formData.append('file', uploadFile);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.status.fileUploading = true;
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.status.fileUploading = false;
        console.log(res);
        if (res.status === 200) {
          this.temProduct.imageUrl.push(res.data.data.path);
        }
      }).catch((error) => {
        this.status.fileUploading = false;
        console.log(error);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .productImg {
    width: 100%;
    min-width: 100px;
    height: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
