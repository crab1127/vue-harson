<template>
<div>  
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <h1 class="page-title">Pull down</h1>
    <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <div class="page-loadmore-wrapper" v-el:wrapper :style="{ height: wrapperHeight + 'px' }">
      <hs-loadmore :top-method="loadTop" :top-status.sync="topStatus">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
      </hs-loadmore>
    </div>
  </div>
</div>
</template>

<script>
  import hsLoadmore from './../../src/components/loadmore.vue'
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        wrapperHeight: 0
      }
    },
    methods: {
      loadTop(id) {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          console.log(this.list)
          this.$broadcast('onTopLoaded', id);
        }, 1500)
      }
    },
    compiled() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    ready() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$els.wrapper.getBoundingClientRect().top;
    },
    components: {
      hsLoadmore
    }
  }
</script>