<template>
<div>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <my-video :sources="video.sources" :options="video.options"> </my-video>
  </div>
</div>
</template>

<script type="text/javascript">
  import myVideo from '../../src/components/video.vue'

  export default {
    data() {
      return {
        video: {
          sources: [{
            src: 'http://113.106.202.71/youku/69766690D0630814BFA398508A/030020010057635AA91F7A2D9B7D2F486800F2-8392-BDF0-CA78-24166313BDF9.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: false,
            poster: 'http://imgs.aixifan.com/content/2016_06_17/1466127968.png'
          }
        }
      }
    },
    
    components: {
      myVideo
    }
  }
</script>