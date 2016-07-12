<template>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <div class="bd spacing"><a href="javascript:;" class="weui_btn weui_btn_primary">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_primary">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_warn">确认</a> <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_warn">确认</a> <a href="javascript:;" class="weui_btn weui_btn_default">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_default">按钮</a><div class="button_sp_area"><a href="javascript:;" class="weui_btn weui_btn_plain_default">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_plain_primary">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary">按钮</a> <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default">按钮</a></div></div>
    <div class="markdown-body">
      <pre><code class="html">   &lt;a href="javascript:;" class="weui_btn weui_btn_primary"&gt;按钮&lt;/a&gt;
     &lt;a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_primary"&gt;按钮&lt;/a&gt;
     &lt;a href="javascript:;" class="weui_btn weui_btn_warn"&gt;确认&lt;/a&gt;
     &lt;a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_warn"&gt;确认&lt;/a&gt;
     &lt;a href="javascript:;" class="weui_btn weui_btn_default"&gt;按钮&lt;/a&gt;
     &lt;a href="javascript:;" class="weui_btn weui_btn_disabled weui_btn_default"&gt;按钮&lt;/a&gt;
     &lt;div class="button_sp_area"&gt;
      &lt;a href="javascript:;" class="weui_btn weui_btn_plain_default"&gt;按钮&lt;/a&gt;
      &lt;a href="javascript:;" class="weui_btn weui_btn_plain_primary"&gt;按钮&lt;/a&gt;
      &lt;a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary"&gt;按钮&lt;/a&gt;
      &lt;a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_default"&gt;按钮&lt;/a&gt;
     &lt;/div&gt;
  </code></pre>
    </div>
  </div>
</template>
<script>
  export default {
    router: {
      data() {
        setTimeout(hljs.initHighlighting(), 0)
      }
    }
  }
</script>