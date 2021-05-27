<template>
  <nav class="mt-5">
    <ul class="pagination pagination-rounded justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page.count">
        <a class="page-link" href="#" @click.prevent="goPage(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['pages'],
  methods: {
    goPage(page) {
      this.$emit('go-page', page);
    },
  },
};
</script>
