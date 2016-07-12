<template>
  <div class="markdown-body home-content">
    {{{ content | marked }}}
  </div>
</template>
<script type="text/javascript">
  //import content from './about.md'
  export default {
    data() {
      return {
        content: 'ass'

      }
    },
    route: {
      data(transition) {
        console.log(transition.to.name)
        this.$http.get('/docs/article/'+transition.to.name+'.md').then((response) => {
          this.content = response.data
        })
        //this.content = require('./'+transition.to.name+'.md')
        console.log(111111,this.content)
      }
    },
    filters: {
      marked: require('marked')
    }
  }
</script>
<style type="text/css">
  .home-content{
    width:800px;
    margin: 20px auto;  
  }
</style>