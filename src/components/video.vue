<template> 
<div class="_video">
  <div class="video-container"
    @mouseenter="mouseEneterVideo"
    @mouseleave="mouseLeaveVideo"
    >
    <video
      class="video-main"
      :poster="options.poster"
      preload="none"
      >
      <source v-for="source in sources" :src="source.src" :type="source.type">    
    </video>
    <div class="video-contral" v-show="state.controlShow">
      <!--进度条-->
      <div class="video-contral-progress"
        @click="slideClick"
        >
        <div class="video-contral-inner" 
          @mousedown="startMoveVideo"
          @touchstart="startMoveVideo"
          :style="{'transform': `translate3d(${video.pos.current}px, 0, 0)`}">
          
        </div>
        <div class="video-contral-rail">
          <div class="video-contral-rail-inner" :style="{'transform': `translate3d(${video.loaded}%, 0, 0)`}"></div>
        </div>
      </div>
      <div class="video-btn-bar">
        <!--播放／暂停-->
        <button class="video-contral-play" @click="play">
          <svg class="video-contrl-play-btn-icon" v-show="!state.playing" viewBox="0 0 47 57" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>Triangle 1</title>
            <desc>Created with Sketch</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon id="Triangle-1" stroke="#fff" fill="#fff" points="1 56 1 1 47 28.5"></polygon>
            </g>
          </svg>
          <svg class="video-contrl-play-btn-icon" v-show="state.playing" viewBox="0 0 15 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
            <title>Combined Shape</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <path d="M0,0.979149244 L5,0.979149244 L5,22 L0,22 L0,0.979149244 Z M10,0.979149244 L15,0.979149244 L15,22 L10,22 L10,0.979149244 Z" id="path-1"></path>
              <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="15" height="21.0208508" fill="white">
                <use xlink:href="#path-1"></use>
              </mask>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <use id="Combined-Shape" stroke="#fff" mask="url(#mask-2)" stroke-width="2" fill="#fff" xlink:href="#path-1"></use>
            </g>
          </svg>
        </button>
        <!--时间比例-->
        <div class="video-time">{{ video.displayTime }}</div>
        <!--全屏-->
        <button class="video-contral-full" @click="fullScreen">
          <svg class="__cov-contrl-vol-btn-icon" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M31.1682064,22 L31.1682064,31.0073537 L22,31.0073537 M22,1       L31.0073537,1 L31.0073537,10.1682064 M1,10.0073537 L1,1 L10.1682064,1 M10.0073537,31.1682064 L1,31.1682064 L1,22" id="Combined-Shape" stroke="#fff" stroke-width="2"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="paly-btn"
      v-show="!state.playing"
      @click="play"
      > 
      <svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g class="transform-group">
          <g transform="scale(0.1953125, 0.1953125)">
            <path d="M512 1022.72C230.4 1022.72 1.312 793.632 1.312 512 1.312 230.4 230.4 1.312 512 1.312 793.6 1.312 1022.688 230.4 1022.688 512 1022.688 793.632 793.6 1022.72 512 1022.72zM512 65.312C265.696 65.312 65.312 265.696 65.312 512c0 246.304 200.384 446.72 446.688 446.72 246.336 0 446.688-200.416 446.688-446.72C958.688 265.696 758.304 65.312 512 65.312zM336 274.496 753.312 512 336 749.504ZM336 765.504c-2.784 0-5.568-0.704-8.032-2.144C323.008 760.48 320 755.2 320 749.504L320 274.496c0-5.696 3.04-10.976 7.968-13.824 4.928-2.88 11.008-2.88 15.968-0.064l417.344 237.504c4.992 2.848 8.096 8.16 8.096 13.92s-3.104 11.072-8.096 13.92l-417.312 237.504C341.44 764.8 338.72 765.504 336 765.504zM352 302.016l0 419.968L720.96 512 352 302.016z" fill="#fff"></path>
          </g>
        </g>
      </svg>
    </div> 
  </div>
</div>
</template>

<script type="text/javascript">

  const getMousePosition = (e, type = 'x') => {
    e = e.changedTouches ? e.changedTouches[0] : e
    if (type === 'x') {
      return e.pageX
    }    
    return e.pageY
  }
  const pad = (val) => {
    val = Math.floor(val)
    if (val < 10) {
      return '0' + val
    }
    return val
  }
  const timeParse = (sec) => {
    let min = 0
    min = Math.floor(sec / 60)
    sec = sec -min * 60
    return pad(min) + ':' + pad(sec)
  }

  export default {
    props: {
      sources: Array,
      options: {
        type: Object,
        default ()  {
          return {
            autoplay: false,
            volume: 0.9,
            poster: ''
          }
        }
      }
    },
    data() {
      return {
        $video: null,
        video: {
          $videoSlider: null,
          len: 0,
          current: 0,
          loaded: 0,
          moving: false,
          displayTime: '00:00',
          pos: {
            start: 0,
            width: 0,
            innerWidth: 0,
            current: 0
          }
        },
        state: {
          playing: false,
          controlShow: true
        },
        //声音
        //移动端暂时先不做
        volume: {
          $volbox: null,
          muted: false,
          percent: false,
          moving: false,
          pos: {
            start: 0,
            width: 0,
            innerWidth: 0,
            current: 0
          }
        },
        player: {
          $player: null,
          pos: null
        },
        tmp: {
          contrlHideTimer: null
        }
      }
    },
    ready () {
      console.log('sdafasdfas')
      this.$video = this.$el.querySelector('video')
      this.init();
      if (this.options.autoplay) {
        this.play()
      }
      document.body.addEventListener('mousemove', this.onMoveVideo)
      document.body.addEventListener('mouseup', this.stopMoveVideo)
      document.body.addEventListener('touchmove', this.onMoveVideo)
      document.body.addEventListener('touchend', this.stopMoveVideo)
    },
    beforeDestroy () {
      document.body.removeEventListener('mousemove', this.onMoveVideo)
      document.body.removeEventListener('mouseup', this.stopMoveVideo)
      document.body.removeEventListener('touchmove', this.onMoveVideo)
      document.body.removeEventListener('touchend', this.stopMoveVideo)
    },
    methods: {
      init() {
        this.initVideo()
        this.initPlay()
      },
      initPlay() {
        let $player = this.$el.querySelector('.video-container')
        this.player.pos = $player.getBoundingClientRect()
        this.player.$player = $player
      },
      initVideo() {
        let $videoSlider = this.$el.querySelector('.video-contral-progress');
        let $videoInner = $videoSlider.querySelector('.video-contral-inner')
        this.$videoSlider = $videoSlider
        this.video.pos.start = $videoSlider.getBoundingClientRect().left
        this.video.pos.innerWidth = $videoInner.getBoundingClientRect().width
        this.video.pos.width = $videoSlider.getBoundingClientRect().width - this.video.pos.innerWidth
        this.getTime()
      },
      play () {
        this.state.playing = !this.state.playing
        if (!this.$video) return;
        if (this.state.playing) {
          this.$video.play()
          this.$video.addEventListener('timeupdate', this.timeline)
          this.$video.addEventListener('ended', (e) => {
            this.state.playing = false;
            this.video.pos.current = 0
            this.$video.currentTime = 0
          })

        } else {
          this.$video.pause();
        }
      },
      mouseEneterVideo() {
        if (this.tmp.contrlHideTimer) {
          clearInterval(this.tmp.contrlHideTimer)
          this.tmp.contrlHideTimer = null
        }
        this.state.controlShow = true
      },
      mouseLeaveVideo() {
        if (this.tmp.contrlHideTimer) {
          clearInterval(this.tmp.contrlHideTimer)
        }
        this.tmp.contrlHideTimer = setTimeout(() => {
          this.state.controlShow = false
          this.tmp.contrlHideTimer = null
        }, 2000)
      },
      toggleControlShow() {
        this.state.controlShow = !this.state.controlShow
      },

      getTime() {
        this.$video.addEventListener('durationchange', (e) => {
          console.log(e)
        })
        this.$video.addEventListener('progress', (e) => {
          this.video.loaded = (-1 + (this.$video.buffered.end(0) / this.$video.duration)) * 100
        })
        this.video.len = this.$video.duration
      },
      timeline () {
        var percent = this.$video.currentTime / this.$video.duration
        this.video.pos.current = (this.video.pos.width * percent).toFixed(3)
        this.video.displayTime = timeParse(this.$video.currentTime) + ' / ' + timeParse(this.$video.duration)
      },
      setVideoByTime (percent) {
        this.$video.currentTime = Math.floor(percent * this.video.len)
      },
      fullScreen() {
        this.state.fullScreen = !this.state.fullScreen

        if(this.state.fullScreen) {
          this.$video.webkitRequestFullscreen()
        } else {
          document.webkitCancelFullScreen()
        }
        setInterval(this.initVideo, 200)
      },
      slideClick(e) {
        console.log(2222,e)
        this.videoSlideMove(e)
      },
      //进度移动
      startMoveVideo() {
        this.initVideo()
        this.video.moving = true
      },
      onMoveVideo(e) {
        if (this.video.moving) {
        console.log(e)
          this.videoSlideMove(e)
        }
        this.controlHider(e)
      },
      stopMoveVideo (e) {
        if (this.video.moving) {
        }
        this.video.moving = false
      },
      controlHider(e) {
        var x = getMousePosition(e, 'x')
        var y = getMousePosition(e, 'y')
        if (!this.player.pos) return;
        if (x > this.player.pos.left && x < this.player.pos.left + this.player.pos.width) {
          if (y > this.player.pos.top + this.player.pos.height * 0.6 &&
              y < this.player.pos.top + this.player.pos.height) {
            return this.mouseEneterVideo()
          }
        }
        return this.mouseLeaveVideo()
      },
      videoSlideMove (e) {
        const x = getMousePosition(e) - this.video.pos.start
        console.log(1,x);
        if (x > 0 && x < this.video.pos.width) {
          this.video.pos.current = x
          this.setVideoByTime(this.video.pos.current / this.video.pos.width)
        }
      }
    },
    filters: {
      stringify: (obj) => {
        return JSON.stringify(obj)
      }
    }
  }
</script>
<style type="text/css">
  .paly-btn{
    position: absolute;
    top:50%;
    left:50%;
    font-size: 4rem;
    margin-top: -2rem;
    margin-left: -2rem;
  }
  .paly-btn svg{
    width: 3rem;
  }
  .video-container {
      position: relative;
      width: 100%;
      background-color: #000;
  }
  .video-main {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
  }
  .video-contral {
      position: absolute;
      display: flex;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.41);
      height: 2rem;
      width: 100%;
      z-index: 2147483647;
  }
  .video-contral-play ,
  .video-contral-full{
      position: relative;
      display: inline-block;
      height: 100%;
      background: none;
      border: none;
      height: 2rem;
      width: 2rem;
      outline: none;
      vertical-align: top;
  }
  .video-contral-play:hover {
      /*background-color: rgba(255, 255, 255, 0.27);*/
  }
  .video-btn-bar{
    width: 100%;
  }
  .video-contrl-play-btn-icon {
      position: absolute;
      height: 1rem;
      width: 1rem;
      top: 50%;
      left: 50%;
      margin-top: -.5rem;
      margin-left: -.5rem;
  }
  .video-contral-progress {
      position: absolute;
      display: block;
      height: .1rem;
      width: 100%;
      transition: all .2s ease-in;
  }
  .video-contral-rail {
      position: absolute;
      top: 50%;
      width: 100%;
      height: .1rem;
      margin-top: -.05rem;
      background: rgba(255, 255, 255, 0.5);
      overflow: hidden;
  }
  .video-contral-rail-inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: .1rem;
      background: rgb(255, 255, 255);
      transition: transform .2s;
  }
  .video-time{
    display: inline-block;
    color: #fff;
    line-height: 2rem;
    font-size: .8rem;
  }
  .video-contral-full{
    position: absolute;
    right: 0;
  }
  .video-contral-inner {
      position: absolute;
      display: inline-block;
      left: 0;
      top: 50%;
      background: #fff;
      width: .8rem;
      height: .8rem;
      border-radius: 100%;
      margin-top: -.4rem;
      z-index: 2;
      cursor: pointer;
      transition: all 16ms;
  }
  .video-contrl-video-time {
      
  }
  .video-contrl-video-time-text {
      
  }
  ::-webkit-media-controls {
    display:none !important;
  }
  video::-webkit-media-controls {
    display:none !important;
  }
  video::-webkit-media-controls-enclosure {
    display:none !important;
  }
  .fade-transition {
      transition: opacity .3s ease;
  }
  .fade-enter{
      opacity: 1;
  }
  .fade-leave {
      opacity: 0;
  }
  .hide-cursor {
      cursor: none;
  }
  @media all and (max-width: 768px) {
      .__cov-contrl-vol-slider {
          width: 3rem;
      }
      .__cov-contrl-video-time {
          padding: 0 .2rem;
      }
      .__cov-contrl-vol-box .__cov-contrl-play-btn {
          width: 2rem;
      }
  }

</style>