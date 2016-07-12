<template>
  <ul class="menu-root">
    <li v-for="menu in menus">
      <strong> {{ menu.title }}</strong>
      <ul class="sub-menu">
        <li v-for="page in menu.list">
          <a v-link="{'name': page.name}">{{page.name}}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
  import { components } from '../navConfig'
  export default {
    data() {
      return {
        menus: components,
        height: 'auto'
      }
    },
    ready() {
      let clientHeight = window.innerHeight - this.$el.getBoundingClientRect().top;
      this.height = clientHeight + 'px';
    }
  }
</script>
