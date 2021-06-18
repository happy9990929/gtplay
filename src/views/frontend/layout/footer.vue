<template>
  <footer class="footer text-center pt-5 pb-1" v-show="showFooter">
    <div class="mt-5">
      <div>
        © 2021. All Rights Reserved.
      </div>
      <div>
        For learning use only, no commercial use
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {},
  computed: {
    showFooter() {
      return this.$route.path === "/" ? false : true;
    }
  }
};
</script>

<style>
.footer {
  font-size: 0.75rem;
}
</style>
