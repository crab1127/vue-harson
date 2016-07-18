<template>
  <div class="tab-container">
    <slot></slot>  
  </div>
</template>

<script>
  export default {
    name: 'hs-tab-container',
    props: {
      active: ''
    }
  }
</script>