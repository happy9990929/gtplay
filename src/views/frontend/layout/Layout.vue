<template>
  <div>
    <header-menu/>
    <router-view/>
    <footer-info/>
  </div>
</template>
<script>
import footerInfo from './footer.vue';
import headerMenu from './header.vue';

export default {
  components: {
    headerMenu,
    footerInfo,
  },
};
</script>
<style>
@media screen and (min-width: 576px){
  html, body {
    font-size: 24px;
  }
}
</style>
<style lang="scss" scoped>
::v-deep .titleName {
  font-size: 1.2rem;
  color: #FFF;
  @media screen and (min-width: 992px){
    font-size: 2rem;
  }
}
::v-deep .subName {
  color: rgba(255,255,255,.1);
  font-family: Arial;
  font-size: 1.8rem;
  margin-top: -5.5%;
  white-space: nowrap;
  @media screen and (min-width: 992px){
    font-size: 3rem;
  }
  @media screen and (min-width: 1200px){
    font-size: 5rem;
  }
}
::v-deep .step {
  font-size: 1.2rem;
  color: #000;
  background-color: #B7B7B7;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  &.active {
    background-color: #FEECBA;
  }
}
::v-deep .stepText {
  color: #B7B7B7;
  font-size: 1.2rem;
  border-bottom: 2px solid;
  margin: 0 .6rem;
  &.active {
    color: #FEECBA;
    border-color: #FEECBA;
  }
}
::v-deep .stepArrow {
  font-size: 1.8rem;
  color: #B7B7B7;
  margin: 0 1.5rem;
  &.active {
    color: #FEECBA;
  }
}
::v-deep .align-middle {
  vertical-align: middle;
}
::v-deep .thead {
  background-color: #171717;
  border-bottom: 10px solid #000;
}
::v-deep .tbody {
  background-color: #171717;
}
::v-deep .table th, ::v-deep .table td {
  vertical-align: middle;
  border: 0;
}
</style>
