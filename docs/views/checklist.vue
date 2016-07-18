<template>
<div>
  <div class="sidebar">
    <menu></menu>
  </div>
  <div class="content">
    <h1>多选</h1>
    <div class="weui_cells weui_cells_checkbox">
      <label class="weui_cell weui_check_label" for="checkbox_ncst2_0"> 
        <div class="weui_cell_hd"> <input type="checkbox" class="weui_check" value="篮球" id="checkbox_ncst2_0"> <i class="weui_icon_checked"></i> </div> 
        <div class="weui_cell_bd weui_cell_primary"> <p>篮球</p> </div>
      </label>
      <label class="weui_cell weui_check_label" for="checkbox_ncst2_1"> 
        <div class="weui_cell_hd"> <input type="checkbox" class="weui_check" value="足球" id="checkbox_ncst2_1"> <i class="weui_icon_checked"></i> </div>
        <div class="weui_cell_bd weui_cell_primary"> <p>足球</p> </div>
      </label>
      <label class="weui_cell weui_check_label" for="checkbox_ncst2_2">
        <div class="weui_cell_hd"> <input type="checkbox" class="weui_check" value="羽毛球" id="checkbox_ncst2_2"> <i class="weui_icon_checked"></i> </div>
        <div class="weui_cell_bd weui_cell_primary"> <p>羽毛球</p> </div>
      </label>
      <label class="weui_cell weui_check_label" for="checkbox_ncst2_3"> 
        <div class="weui_cell_hd"> <input type="checkbox" class="weui_check" value="台球" id="checkbox_ncst2_3"> <i class="weui_icon_checked"></i> </div>
        <div class="weui_cell_bd weui_cell_primary"> <p>台球</p> </div>
      </label>
    </div>
  </div>
</div>
</template>

<script>
import Msg from './../../src/components/msg.vue'

export default {
  components:{
    Msg
  }
}
</script>
<style lang="less">
@import "../../src/style/widget/weui_cell/weui_cell_global";
@import "../../src/style/widget/weui_cell/weui_access";
@import "../../src/style/widget/weui_cell/weui_check";
@import "../../src/style/widget/weui_cell/weui_form";
@import "../../src/style/widget/weui_cell/weui_switch";
</style>