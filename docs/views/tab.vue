<template>
<div>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <hs-navbar class="page-part" :active.sync="selected" style="margin-bottom: 20px;">
      <hs-tab-item id="1">幻灯片</hs-tab-item>
      <hs-tab-item id="2">视频</hs-tab-item>
      <hs-tab-item id="3">声音</hs-tab-item>
      <hs-tab-item id="4">图文</hs-tab-item>
    </hs-navbar>
    <hs-tab-container :active.sync="selected">
      <hs-tab-container-item id="1">
        第一个窗口
      </hs-tab-container-item>
      <hs-tab-container-item id="2">
        第2个窗口第2个窗口 
      </hs-tab-container-item>
      <hs-tab-container-item id="3">
        第3个窗口第3个窗口第3个窗口
      </hs-tab-container-item>
      <hs-tab-container-item id="4">
        第4个窗口第4个窗口第4个窗口第4个窗口
      </hs-tab-container-item>
    </hs-tab-container>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        selected: '1'
      }
    }
  }
</script>