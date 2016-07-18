<template>
  <div>
    <div class="sidebar">
      <menu></menu>
    </div>
    <div class="content">
      <div class="page actionSheet" style="overflow: hidden">
          <div class="hd">
              <h1 class="page_title">ActionSheet</h1>
          </div>
          <div class="bd spacing">
              <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showActionSheet=true;">点击上拉ActionSheet</a>
          </div>
          <ActionSheet :is-show.sync="showActionSheet"></ActionSheet>
      </div>
    </div>
  </div>
</template>

<script>
import Actionsheet from './../../src/components/actionSheet.vue'

export default {
  name: 'ActionSheetView',
  components: {
    Actionsheet
  },
  data(){
    return {
      showActionSheet:false
    };
  }
}
</script>
