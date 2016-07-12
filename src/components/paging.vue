<template>
  <ul class="pagination" v-if="pages > 1">
    <li class="paginate_button previous" :class="{disabled: 1 == current}" @click="pageClick(current-1)">
      <a href="javascript:;">上一页</a>
    </li>
    <li v-for="page in pageRange" @click="pageClick(page)" class="paginate_button" :class="{active: current == page}">
      <a href="javascript:;">{{ page }}</a>
    </li>
    <li class="paginate_button next" :class="{disabled: pages == 0 || pages == current}" @click="pageClick(current + 1)">
      <a href="javascript:;">下一页</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      //总数
      total: {
        required: true
      },
      //当前页数
      current: {
        default: 1,
      },
      //每页包含多少条目
      perPage: {
        default: 10
      },
      prevShow: {
      },
      pageChanged: {
        type: Function,
        default: function() {}
      }
    },
    data() {
      return {
        pageRange: []
      }
    },
    methods: {
      pageClick(page) {
        if (page < 1 || page > this.pages) {
          return
        }
        var oldValue = this.current;
        this.current = page;
        if (!!this.pageChanged && oldValue != page) {
          this.pageChanged.call(this, page);
        }
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.total/this.perPage);
      },
      pageRange() {
        var pageRange = [];
        //if (this.total > this.size) {
        for(var i=0; i < this.pages; i++) {
          pageRange.push(i+1);
        }
        return pageRange;
      }
    }
  }
</script>

<style lang="less">
  @activeColor: #31aef1;
  .pagination{
    > li {
      display: inline-block;
      border:1px solid #ddd;
      margin-right: 2px;
      > a {
        display: inline-block;
        padding:.5em 1em;
        font-size: 12px;
        color:#666;
      }
      &:hover{
        background: #eee;
      }
      &.active{
        background: @activeColor;
        border-color: @activeColor;
        a{
          color:#fff;
        }
      }
    }
  }
</style>