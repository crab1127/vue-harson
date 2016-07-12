<template>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <my-video :sources="video.sources" :options="video.options"> </my-video>
  </div>
</template>

<script type="text/javascript">
  import myVideo from '../../src/components/video.vue'

  export default {
    data() {
      return {
        video: {
          sources: [{
            src: 'http://124.232.154.173/youku/6975F9F8C783182CC7A31E342B/0300200100577B7E949E322D9B7D2FCBDA198A-82E2-6311-BF18-7229946A568C.mp4',
            type: 'video/mp4'
          }],
          options: {
            autoplay: false,
            poster: 'http://imgs.aixifan.com/content/2016_07_05/1467712317.png'
          }
        }
      }
    },
    
    components: {
      myVideo
    }
  }
</script>