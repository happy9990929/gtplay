<template>
  <div>
    <nav class="navBar navbar navbar-dark p-0">
      <div class="logo mx-md-auto ml-md-0 my-md-0 ml-3 my-3">
        <img src="@/assets/images/backend/logo.png" class="img-fluid"/>
      </div>
      <button class="navbar-toggler mr-md-0 mr-3 d-md-none" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-md-block" id="navbarNav">
        <ul class="list-unstyled mb-0">
          <router-link tag="li" class="navItem" to="/admin/products">
            <i class="fas fa-store"></i>
            <span class="ml-3">產品列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/coupon">
            <i class="fas fa-gift"></i>
            <span class="ml-3">優惠券列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/orders">
            <i class="far fa-list-alt"></i>
            <span class="ml-3">訂單列表</span>
          </router-link>
          <router-link tag="li" class="navItem" to="/admin/storages">
            <i class="far fa-images"></i>
            <span class="ml-3">圖片儲存列表</span>
          </router-link>
          <li class="navItem" @click="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="ml-3">登出</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content mt-5 mt-md-0">
      <router-view v-if="loginSuccess" :token="token"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: '',
      loginSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const loader = this.$loading.show();
      // 取得token
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)mytoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      // 驗證
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`;
      this.$http.post(api, { api_token: this.token }).then((res) => {
        loader.hide();
        if (res.data.success === true) {
          this.loginSuccess = true;
        }
      }).catch((error) => {
        loader.hide();
        console.log(error);
        this.$router.push('/login');
      });
    },
    logout() {
      document.cookie = 'mytoken=;expires=';
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100px;
}
.navBar {
  width: 100%;
  background-color: #313a46;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.navItem {
  color: #8391a2;
  width: 100%;
  padding: .5rem 0 .5rem 35%;
  transition: all .2s ease;
  cursor: pointer;
  &:hover {
    color: #cedce4;
    background-color: #424d5a;
  }
  &.router-link-active {
    color: #ffffff;
    background-color: #424d5a;
  }
}
::v-deep .btn-orange {
  box-shadow: 0 2px 6px 0 rgba(250, 165, 92, .7);
  &:hover {
    background-color: #ff8d17;
    border-color: transparent;
  }
}
::v-deep .card {
  border: none;
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  margin-bottom: 24px;
}
::v-deep .thead {
  background-color: #f1f3fa;
  border-color: #eef2f7;
}
::v-deep .table th, ::v-deep .table td {
  vertical-align: middle;
}
::v-deep .table thead th {
  vertical-align: bottom;
  border-bottom: 0;
  font-weight: normal;
}
::v-deep .pagination-rounded .page-link {
  border-radius: 100%;
  margin: 0 3px;
  border: none;
}
::v-deep .page-link {
  display: block;
  padding: .5rem .75rem;
  line-height: 1.25;
  color: #313a46;
  background-color: #fff;
}
::v-deep .page-item {
  &.active {
    .page-link {
      z-index: 3;
      color: #fff;
      background-color: #a5a6af;
      border-color: #a5a6af;
    }
  }
}
@media screen and (min-width:768px){
  .logo {
    width: 170px;
  }
  .navBar {
    bottom: 0;
    width: 260px;
  }
  .content {
    margin-left: 260px;
  }
  .navItem {
    width: 75%;
    padding: .8rem;
    margin: .5rem auto;
    &:hover {
      background-color: initial;
    }
    &.router-link-active {
      background-color: initial;
    }
  }
}
</style>
