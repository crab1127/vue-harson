<template>
  {{{ content | marked }}}
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
        this.$http.get('/docs/views/'+transition.to.name+'.md').then((response) => {
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