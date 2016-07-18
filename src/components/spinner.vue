<template>
   <div class="kebab-spinner-fading-circle circle-color-{{_uid}}" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <style>.circle-color-{{_uid}} > div::before { background-color: {{ spinnerColor }}; }</style>
    <div class="is-circle1 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle2 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle3 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle4 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle5 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle6 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle7 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle8 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle9 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle10 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle11 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle12 kebab-spinner-fading-circle-circle"></div>
  </div>
</template>
<script>
  export default {
    name: 'spinner',
    props: {
      size: '28px'  
      color: '#ccc',
    }
  }
</script>
<style lang="less">
  .loop(@n) when(@n > 0) {
    
  }
  @-weikit-keyframes light {
    0% {
      opacity: 0
    }
    39% {
      opactiy: 0
    }
    40% {
      opacity: 1
    }
    100%{
      opacity: 0
    }
  }
  @keyframes light {
    0% {
      opacity: 0
    }
    39% {
      opactiy: 0
    }
    40% {
      opacity: 1
    }
    100%{
      opacity: 0
    }
  }
</style>