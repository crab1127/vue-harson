<template>
  <a class="tab-item"
    @click="$parent.active = id"
    :class="{'active': $parent.active === id}">
    <div class="tab-item-icon"><slot name="icon"></slot></div>
    <div class="tab-item-label"><slot></slot></div>
  </a>
</template>
<script>
  export default {
    name: 'hs-tab-item',
    props: {
      id: ''
    }
  }
</script>

<style lang="less">
  .tab-item{
    display: block;
    padding: 7px 0;
    flex: 1;
    cursor:pointer; 
    .tab-item-icon {
      size: 24px;
      margin: 0 auto 5px;
      &:empty {
        display: none;
      }
      & > * {
        display: block;
        size: 100%;
      }
    }
    .tab-item-label {
      color: inherit;
      font-size: 14px;
      line-height: 1;
    }    
  }
</style>