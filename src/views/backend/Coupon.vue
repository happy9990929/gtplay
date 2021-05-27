<template>
  <div class="p-4">
    <h3 class="my-4">優惠券</h3>
    <div class="card">
      <div class="card-body">
        <button class="btn btn-orange" @click="openModal('new')">
          <i class="fas fa-plus-circle"></i>
          建立新的優惠券
        </button>
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">名稱</th>
                <th scope="col">折扣百分比</th>
                <th scope="col">到期日</th>
                <th scope="col">啟用</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in coupons" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}</td>
                <td>{{ item.deadline.datetime }}</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input"
                    id="customSwitch1" :checked="item.enabled" disabled>
                    <label class="custom-control-label" for="customSwitch1"></label>
                  </div>
                </td>
                <td class="text-right text-nowrap">
                  <button class="btn btn-outline-orange mx-1" @click="openModal('edit',item)">
                    <i class="far fa-edit"></i>
                  </button>
                  <button class="btn btn-outline-danger mx-1" @click="openModal('delete',item)">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="modal fade" id="couponModal"
          tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div>
                    <h5 v-if="isNew" class="modal-title">新增優惠券</h5>
                    <h5 v-else class="modal-title">新增優惠券</h5>
                  </div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input id="title" type="text" placeholder="請輸入標題"
                    class="form-control" v-model="temCoupon.title">
                  </div>
                  <div class="form-group">
                    <label for="coupon_code">優惠碼</label>
                    <input id="coupon_code" type="text" placeholder="請輸入優惠碼"
                    class="form-control" v-model="temCoupon.code">
                  </div>
                  <div class="form-group">
                    <label for="due_date">到期日</label>
                    <input id="due_date" type="date" v-model="due_date"
                    class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="due_time">到期時間</label>
                    <input id="due_time" type="time" step="1" v-model="due_time"
                    class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="percent">折扣百分比</label>
                    <input id="percent" type="number" placeholder="請輸入折扣數量"
                    class="form-control" v-model="temCoupon.percent">
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-switch">
                      <input type="checkbox" id="enable"
                      class="custom-control-input" v-model="temCoupon.enabled">
                      <label class="custom-control-label" for="enable">啟用</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary"
                  data-dismiss="modal">關閉</button>
                  <button type="button" class="btn btn-orange"
                  @click="updateCoupon">確認</button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="delCouponModal"
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
                    <span>刪除優惠卷</span>
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
                  <strong class="text-danger">{{ temCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
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
                    @click="delCoupon"
                  >
                    確認刪除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination :pages="pagination" @go-page="getCoupons"/>
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
      coupons: {},
      temCoupon: {
        title: '',
        enabled: false,
        percent: 100,
        deadline_at: 0,
        code: '',
      },
      due_date: '',
      due_time: '',
      pagination: {},
      isNew: false,
    };
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`;
      this.$http.get(api).then((res) => {
        this.coupons = res.data.data;
        this.pagination = res.data.meta.pagination;
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },

    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.temCoupon = {};
          this.isNew = true;
          $('#couponModal').modal('show');
          break;
        case 'edit': {
          this.temCoupon = { ...item };
          // 使用 split 切割相關時間戳
          const dedlineAt = this.temCoupon.deadline.datetime.split(' ');
          [this.due_date, this.due_time] = dedlineAt; // 日期
          this.isNew = false;
          $('#couponModal').modal('show');
          break;
        }
        case 'delete':
          this.temCoupon = { ...item };
          $('#delCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateCoupon() {
      const loader = this.$loading.show();
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.temCoupon.id}`;
        httpMethod = 'patch';
      }
      // 針對日期做組合重新寫入到物件中
      // 日期格式 Y-m-d H:i:s，例如：「2020-06-16 09:31:18」
      this.temCoupon.deadline_at = `${this.due_date} ${this.due_time}`;
      this.$http[httpMethod](api, this.temCoupon).then((res) => {
        console.log(res);
        $('#couponModal').modal('hide');
        this.getCoupons();
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
    delCoupon() {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.temCoupon.id}`;
      this.$http.delete(api).then(() => {
        $('#delCouponModal').modal('hide');
        this.getCoupons();
        loader.hide();
      }).catch((error) => {
        console.log(error);
        loader.hide();
      });
    },
  },
};
</script>
