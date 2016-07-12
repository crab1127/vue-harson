<template>
  <header id="header">
    <div class="container">
      <a class="logo" href="/">前端架构</a>
      <ul class="nav navbar-nav">
        <li v-for="nav in navs">
          <a v-link="{'name': nav.name}">{{nav.cnName}}</a>
        </li>
      </ul>
    </div>
  </header>
  <div id="main">
    <router-view></router-view> 
  </div>
</template>

<script>
  import { nav } from './navConfig'
  export default {
    data() {
      return {
        navs: nav
      }
    }
  }
</script>

<style lang="less">
  @import "../src/style/base/reset";
  @import "../src/style/widget/weui_button/weui_button";
  @import "./assets/markdown.css";

  html,body,#app{
    min-height:100%;
  }

  li{ 
    list-style: none;
  }
  .container{
    
    margin: 0 60px;
  }
  #header{
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
    padding: 15px 0px;
    position: fixed;
    width: 100%;
    z-index: 2;
    .logo{
      display: inline-block;
      font-size: 1.5em;
      line-height: 40px;
      color: #2c3e50;
      font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 500;
    }
    .nav{
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: absolute;
      right: 60px;
      top: 15px;
      height: 40px;
      line-height: 40px;
      li{
        display: inline-block;
        position: relative;
        margin: 0 0.6em;
      }
    }
  }
  #main {
    position: relative;
    padding: 0 60px 30px;
    overflow-x: hidden;
    top: 70px;
  }
  .sidebar {
    position: fixed;
    z-index: 1;
    top: 70px;
    left: 60px;
    bottom: 0;
    padding: 2.2em 0;
    width: 250px;
    margin-right: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
  }
  .content {
    padding: 2.2em 0;
    max-width: 600px;
    margin: 0 auto;
  }
  .sidebar .menu-root {
    padding-left: 0;
  }
  .sidebar ul {
    list-style-type: none;
    margin: 0;
    line-height: 1.8em;
  }
  .sidebar .menu-sub {
      //font-size: 0.85em;
  }
  .menu-root strong{
    font-size: 0.85em;
    color:#999
  }
  .menu-root a{
    color:#666
  }
</style>