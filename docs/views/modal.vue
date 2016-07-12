<template>
  <div class="sidebar"> 
    <menu></menu>
  </div>
  <div class="content">
    <h1>{{title}}</h1>

    <button class="weui_btn weui_btn_primary"
      @click="showModal = true"
      >
      Show modal
    </button>
  </div>
  <modal :show.sync="showModal">
    
    <div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </modal>

</template>

<script>

  import modal from '../../src/components/modal.vue'

  export default {
    data() {
      return {
        title: '弹窗',
        showModal: false
      }
    },
    methods: {
      ModalCB: function() {
        alert('你点的是确定');
        this.showModal = false
      }
    },
    components: {
      modal
    }
  }
</script>