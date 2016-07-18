<template>
  <div class="hs-loadmore"
    @touchstart="loadStartTouch($event)"
    @touchMove="loadMoveTouch($event)"
    @touchend="loadEndTouch($event)"
    >
    <div class="hs-loadmore-content"
      :class="{'is-dropped': topDropped || bottomDropped}"
      :style="{'transform': `translate3D(0, ${translate}px, 0)`}"
      v-el="loadmore-content"
      >
      <slot name="top">
        <div class="hs-loadmore-top" v-if="topMethod">
          <span class="hs-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>  
      <slot name="bottom">
        <div class="hs-loadmore-bottom" v-if="bottomMethod">
          <span class="hs-loadmore-text">{{ bottomText }}</span>
        </div>
      </slot>  
    </div>
  </div>
</template>
<script>
  const getMousePosition = (e, type = 'x') => {
    e = e.changedTouches ? e.changedTouches[0] : e
    if (type === 'x') {
      return e.pageX
    }    
    return e.pageY
  }
  export default {
    name: 'hs-loadmore',
    props: {
      autoFill: {
        type: Boolean,
        default: true
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadText: {
        type: String,
        default: '加载中'
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      topStatus: {
        type: String,
        default: ''
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放更新'
      },
      bottomLoadText: {
        type: String,
        default: '加载中。。。'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomStatus: {
        type: String,
        default: ''
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0
      }
    },
    computed: {
      topText() {
        let text = '';
        switch (this.topStatus) {
          case 'pull':
            text = this.topPullText;
            break;
          case 'drop':
            text = this.topDropText;
            break;
          case 'loading':
            text = this.topLoadText;
            break
        }
        return text;
      },
      bottomText() {
        let text = '';
        switch (this.bottomStatus) {
          case 'pull':
            text = this.bottomPullText;
            break;
          case 'drop':
            text = this.bottomDropText;
            break;
          case 'loading':
            text = this.bottomLoadText;
            break
        }
        return text;
      }
    },
    ready(){
      this.uuid = Math.random().toString(36).substring(3,8);
      this.topStatus = 'pull';
      this.bottomStatus = 'pull';
      this.topText = this.topPullText;
      this.scrollEventTarget = this.getScrollEventTarget(this.$el);
      if (typeof this.bottomMethod === 'function') {
        this.fillContainer()
      }
    },
    methods: {
      loadStartTouch(e){
        this.startY = e.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false
        }
        if (this.bottom !== 'loading') {
          this.bottomStatus = 'pull',
          this.bottomDropped = false
        }
      },
      loadMoveTouch(e){
        if (this.startY < this.$el.getBoundingClientRect().top && 
            this.startY > this.$el.getBoundingClientRect().bottom) {
          return
        }

        this.currentY = e.touches[0].clientY;
        let distance = this.currentY - this.startY;
        this.direction = distance > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
            this.getScrollTop(this.scrollEventTarget) === 0 &&
            this.topStatus !== 'loading') {
          e.preventDefault();
          e.stopPropagation();
          this.translate = distance - this.startScrollTop;
          if (this.translate < 0) {
            this.translate = 0
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }
        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached();
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' && 
            this.bottomReached && this.bottomStatus !== 'loading' && 
            !this.bottomAllLoaded) {
          event.preventDefault();
          event.stopPropagation();
          this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
          if (this.translate > 0) {
            this.translate = 0;
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
        }
      },
      loadEndTouch(e){
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = '50';
            this.topStatus = 'loading';
            this.topMethod(this.uuid);
          } else {
            this.translate = '0';
            this.topStatus = 'pull';
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomStatus === 'drop') {
            this.translate = '-50';
            this.bottomStatus = 'loading';
            this.bottomMethod(this.uuid);
          } else {
            this.translate = '0';
            this.bottomStatus = 'pull';
          }
        }
        this.direction = '';
      },

      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
          }
          currentNode = currentNode.parentNode;
        }
        return window
      },
      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop;
        }
      },
      fillContainer() {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom;
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= this.scrollEventTarget.getBoundingClientRect().bottom;
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading';
              this.bottomMethod(this.uuid);
            }
          })
        }
      },
      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom;
        }
      }
    },
    events: {
      onTopLoaded(id) {
        if (id === this.uuid) {
          this.translate = 0;
          setTimeout(() => {
            this.topStatus = 'pull';
          }, 200)
        }
      },
      onBottomLoaded(id) {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
        if (id === this.uuid) {
          this.$nextTick(()=> {
            if (this.scrollEventTarget === window) {
              document.body.scrollTop += 50
            } else {
              this.scrollEventTarget.scrollTop += 50
            }
            this.translate = 0;
          })
        }
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer();
        }
      }
    }
  }
</script>
<style lang="less">
  .hs-loadmore {
    overflow: hidden; 

    .hs-loadmore-content {
      &.is-dropped {
        -webkit-transition: .2s;
        transition: .2s;
      }
    }
    .hs-loadmore-top, 
    .hs-loadmore-bottom {
      text-align: center; 
      height: 50px;
      line-height: 50px;
    }
    .hs-loadmore-top {
      margin-top: -50px;
    }
    .hs-loadmore-bottom{
      margin-bottom: 50px;
    }
    .hs-loadmore-text {
      vertical-align: middle;
    }
  }
</style>