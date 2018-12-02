<template lang="pug">
  nav.menu(v-if='menuType')
    a.menu-item(href='#portifolio') Portifólio
    a.menu-item(href='#biography') Biografia
    a.menu-item(href='https://goo.gl/forms/g2fRny0KwJhkFzzE2', target='_blank') Me chama
  nav.menu(v-else)
    routerLink.menu-item(to='/#portifolio') Portifólio
    routerLink.menu-item(to='/#biography') Biografia
    a.menu-item(href='https://goo.gl/forms/g2fRny0KwJhkFzzE2', target='_blank') Me chama
</template>
<script>
export default {
  data() {
    return {
      menuType: false
    }
  },
  watch: {
    '$route' (to) {
      this.menuType = to.path == "/";
    }
  }
}
</script>

<style lang="scss">
  .menu {
    padding: 2em 0.1em;
    background: #4C4C4C;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-weight: bold;
    position: fixed;
    width: 100vw;
    z-index: 10;
    .menu-item {
      text-decoration: none;
      color: white;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #2F80ED;
      }
    }
  }
</style>
