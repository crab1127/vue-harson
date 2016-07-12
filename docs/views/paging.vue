<template>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <h1>{{title}}</h1>
    <paging :total.sync="page.total" :current="page.current" :per-page="page.perPage" :page-changed="pageCallback"></paging>
  </div>
</template>

<script>

  import paging from '../../src/components/paging.vue'



  export default {
    data() {
      return {
        title: '分页',
        page: {
          total: 100,
          current: 4,
          perPage: 20
        }
      }
    },
    methods: {
      pageCallback (page) {
        alert('当前页码：' + page)
      }
    },
    components: {
      paging
    }
  }
</script>