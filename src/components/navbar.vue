<template>
  <div class="navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'hs-navbar',
    props: {
      fixed: Boolean,
      active: ''
    }
  }
</script>
<style lang="less">
  .navbar{
    background: #fff;
    display: flex;
    text-align: center;
    &.is-fixed{
      position: fixed 0 0 * 0;
      z-index: 12;
    }
    .tab-item{
      padding: 17px 0;
      font-size: 14px;
      &:last-child{
        border-right: 0;
      }
      &.active{
        border-bottom: 3px solid #ddd;
        color: #e00;
        margin-bottom: -3px;
      }
    }
  }
</style>