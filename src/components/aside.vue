<template> 
  <div class="aside"
    :style="{width: width + 'px'}"
    :class="{
      left: placement === 'left',
      right: placement === 'right'
    }"
    v-show="show"
    :transition="(this.placement === 'left') ? 'slideleft': 'slideright'"
    >
    
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
        require: true,
        twoWay: true
      },
      placement: {
        type: String,
        default: 'right'
      },
      header: {
        type: String
      },
      width: {
        type: Number,
        default: '320'
      }
    },
    watch: {
      show: (val) => {
        let backdrop = document.createElement('div');
        const body = document.body;
        backdrop.className = 'aside-backdrop'

        if (val) {
          body.appendChild(backdrop)
          body.classList.add('modal-open')
          if (true) {}
          backdrop.className +=' in'
          this._clickEvent = backdrop.addEventListener('click', this.close)

        } else {
          if (this._clickEvent) {
            this._clickEvent.remove()
          }
          backdrop = document.querySelector('.aside-backdrop');
          try {
            body.classList.remove('modal-open')
            body.removeChild(backdrop)
          } catch(e) {}
        }
      }
    },
    methods: {
      close() {
        this.show = false
      }
    }
  }
</script>