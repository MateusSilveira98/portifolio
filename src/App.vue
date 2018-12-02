<template lang='pug'>
  #app
    Header
    router-view
</template>
<script>
import Header from './_components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('./App.scss');
</style>
