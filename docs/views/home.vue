<template>
  <div class="markdown-body home-content">
    {{{ content | marked }}}
  </div>
</template>

<script>
  //import modal from '../../src/components/modal.vue'

  export default {
    data() {
      return {
        content: ''
      }
    },
    ready() {
      this.$http.get('./docs/article/home.md').then((res) => {
        this.content = res.data;
      })
    },
    filters: {
      marked: require('marked')
    }
  }
</script>
<style lang="less">
  .home-content{
    width:800px;
    margin: 0 auto;  
  }
</style>