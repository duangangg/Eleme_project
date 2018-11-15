<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Foot from '@/components/Foot.vue'
export default {
  name: 'App',
  components: {
    Foot
  }
}
</script>

<style lang='scss'>
  html,body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
