<template>
  <div :class="'weui_dialog_'+ type" v-show="show" transition="modal">
    <div class="weui_mask"></div>
    <div class="weui_dialog"
      :style="{width: optionalWidths}"
      >
        <div class="weui_dialog_hd">
          <strong class="weui_dialog_title">
            {{title}}
          </strong>
        </div>
        <div class="weui_dialog_bd">
          <slot></slot>
        </div>
        <div class="weui_dialog_ft">
          <a href="javascript:;" class="weui_btn_dialog default" 
            v-if="type === 'confirm'" 
            @click="close">
            {{cancelText}}
          </a>
          <a href="javascript:;" class="weui_btn_dialog primary"
            v-if="type === 'confirm'" 
            @click="callback">
            {{okText}}
          </a>
          <a href="javascript:;" class="weui_btn_dialog primary" 
            v-if="type !== 'confirm'" 
            @click="close">
            {{okText}}
          </a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      //弹窗类型： alert  confirm
      type: {
        type: String,
        default: 'alert'
      },
      show: {
        require: true,
        type: Boolean,
        twoWay: true
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      title: {
        type: String,
        default: '提示'
      },
      width: {
        default: null
      },
      callback: {
        type: Function,
        default: function(){
          console.log(this);
          this.show = false;
        }
      },
      backdrop: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      optionalWidths() {
        if (this.width = null) {
          return null
        } else if (Number.isInteger(this.width)) {
          return this.width + 'px'
        }
        return this.width
      }
    },
    methods: {
      close() {
        this.show = false
      }
    }
  }
</script>
<style lang="less">
  @import "../style/widget/weui_tips/weui_dialog";
  .modal-enter,
  .modal-leave{
    opacity: 0;
  }
  .modal-enter .weui_dialog,
  .modal-leave .weui_dialog {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @import "../style/widget/weui_tips/weui_mask";
</style>