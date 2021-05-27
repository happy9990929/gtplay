<template>
  <div>
    <img :src='`@/assets/images/frontend/${bannerName}.jpg`' class="img-fluid">
  </div>
</template>

<script>
export default {
  computed: {
    bannerName() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style>

</style>
