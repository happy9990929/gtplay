import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/frontend/layout/Layout.vue"),
    children: [
      {
        path: "",
        name: "Index",
        component: () => import("../views/frontend/Index.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/frontend/About.vue")
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("../views/frontend/Cart.vue")
      },
      {
        path: "info",
        name: "Info",
        component: () => import("../views/frontend/Info.vue")
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import("../views/frontend/Checkout.vue")
      },
      {
        path: "complete",
        name: "Complete",
        component: () => import("../views/frontend/Complete.vue")
      },
      {
        path: "product/:id",
        name: "Product",
        component: () => import("../views/frontend/Product.vue")
      },
      {
        path: "products",
        name: "Products",
        component: () => import("../views/frontend/Products.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/backend/layout/Dashboard.vue"),
    children: [
      {
        path: "coupon",
        name: "Coupon",
        component: () => import("../views/backend/Coupon.vue")
      },
      {
        path: "storages",
        name: "Storages",
        component: () => import("../views/backend/Storages.vue")
      },
      {
        path: "orders",
        name: "Orders",
        component: () => import("../views/backend/Orders.vue")
      },
      {
        path: "products",
        name: "Products_admin",
        component: () => import("../views/backend/Products.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active", //設定 全域 的 <router-link> 若路由"完全相符"，會加入的 class 名稱
  scrollBehavior() {
    return { x: 0, y: 0 }; //路由切換時，期望滾動到的滾輪位置;
  }
});

export default router;
