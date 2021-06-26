<template>
  <div>
    <header-menu />
    <router-view />
    <footer-info />
  </div>
</template>
<script>
import footerInfo from "./Footer.vue";
import headerMenu from "./Header.vue";

export default {
  components: {
    headerMenu,
    footerInfo
  }
};
</script>
<style>
ul {
  list-style: none;
  padding: 0;
}
@media screen and (min-width: 576px) {
  html,
  body {
    font-size: 21px;
  }
}
</style>
<style lang="scss" scoped>
@mixin outlineBtnHoverAngle {
  width: 80px;
  background-color: #feecba;
}
::v-deep .outlineBtn {
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 15px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    color: #feecba;
    border-color: #feecba;
  }
  &:hover .angleLineLeft {
    @include outlineBtnHoverAngle;
  }
  &:hover .angleLineRight {
    @include outlineBtnHoverAngle;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
}
@mixin angleLine {
  width: 50px;
  height: 1px;
  display: inline-block;
  position: relative;
  transition: all 0.4s ease;
  background-color: #fff;
}
@mixin angleArrow {
  content: "";
  position: absolute;
  width: 10px;
  height: 1px;
  background-color: #fff;
}
::v-deep .angleLineLeft {
  @include angleLine;
  &::before {
    @include angleArrow;
    right: 0;
    top: -4px;
    transform: rotate(45deg);
  }
  &::after {
    @include angleArrow;
    right: 0;
    top: 4px;
    transform: rotate(-45deg);
  }
}
::v-deep .angleLineRight {
  @include angleLine;
  &::before {
    @include angleArrow;
    left: 0;
    top: -4px;
    transform: rotate(-45deg);
  }
  &::after {
    @include angleArrow;
    left: 0;
    top: 4px;
    transform: rotate(45deg);
  }
}
::v-deep .next {
  &:not(:disabled) {
    background-color: #feecba;
    color: #000;
    .angleLineLeft {
      background-color: #000;
      &::after {
        background-color: #000;
      }
      &::before {
        background-color: #000;
      }
      &:hover {
        color: #000;
      }
    }
    &:hover {
      color: #000;
      .angleLineLeft {
        background-color: #000;
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
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
::v-deep .table th,
::v-deep .table td {
  vertical-align: middle;
  border: 0;
}
</style>
