<template>
<div>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <h1>{{ title }} ddd</h1>
    <slide id="swiper_horizontal"
          :pagination-visible="true"
          direction="horizontal">
      <div v-for="slideText in slides" track-by="$index">{{slideText}}</div>
    </slide>
  </div>
</div>
</template>
<script type="text/javascript">
  import slide from '../../src/components/slide.vue'

  export default {
    data() {
      return {
        title: '幻灯片',
        slides: ['← o ssss→', 'Page 2', 'Page 3']
      }
    },
    components: {
      slide
    }
  }
</script>
<style type="text/css">
   .swiper {
            height: 200px;
            margin-bottom: 80px;
        }
        .swiper-wrap > div {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 48px;
            color: #fff;
        }
        .swiper-wrap > div:nth-child(3n) {
            background-color: skyblue;
        }
        .swiper-wrap > div:nth-child(3n + 1) {
            background-color: yellowgreen;
        }
        .swiper-wrap > div:nth-child(3n + 2) {
            background-color: rosybrown;
        }
        #append_child {
            text-align: center;
            margin-bottom: 80px;
        }
        #swiper_children_size {
            height: 400px;
        }
        #swiper_children_size .slide-1 {
            height: 200px;
        }
        #swiper_children_size .slide-2 {
            height: 150px;
        }
        #swiper_children_size .slide-3 {
            height: 100px;
        }
        #swiper_children_size .slide-4 {
            height: 350px;
        }
        .swiper-nested-inner {
            width: 100%;
            height: 100%;
            margin-bottom: 0;
        }
</style>