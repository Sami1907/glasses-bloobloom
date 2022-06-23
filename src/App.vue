

<template>

<img class="logo" src="./assets/logo-bloobloom.png"/>
  <nav class="navbar">
    <sidebar-menu :menu="menu"  class="v-sidebar-menu vsm_collapsed"/>

  </nav>
 

  <router-view />
</template>
<script >
import { ref} from "vue";
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
    components: {
    SidebarMenu
  },
  // Sidebar menu (required)
menu: {
  type: Array,
  required: true
},
// Sidebar Collapse state
collapsed: {
  type: Boolean,
  default: true
},
// Sidebar width (expanded)
width: {
  type: String,
  default: '150px'
},
// Sidebar width (collapsed)
widthCollapsed: {
  type: String,
  default: '2px'
},
// Keep only one child opened at a time (first level only)
showOneChild: {
  type: Boolean,
  default: false
},
// Keep all child open
showChild: {
  type: Boolean,
  default: false
},
// Sidebar right to left
rtl: {
  type: Boolean,
  default: true
},
// Make sidebar relative to the parent (by default the sidebar is relative to the viewport)
relative: {
  type: Boolean,
  default: false
},
// Hide toggle collapse btn
hideToggle: {
  type: Boolean,
  default: true
},
// Sidebar theme (available themes: 'white-theme')
theme: {
  type: String,
  default: ''
},
// Disable hover on collapse mode
disableHover: {
  type: Boolean,
  default: false
},
  data() {
          return {
              menu: [
                  {
                      header: true,
                      title: 'Main Navigation',
                      hiddenOnCollapse: false
                  },
                  {
                      href: '/spectacles-women',
                      title: 'Spectacles',
                      child: [
                          {
                              href: '/spectacles-women',
                              title: 'Women'
                          },
                          {
                              href: 'spectacles-men',
                              title: 'Men'
                          }
                      ]
                  },
                  {
                      href: '/sunglasses-women',
                      title: 'Sunglasses',
                      child: [
                          {
                              href: '/sunglasses-women',
                              title: 'Women'
                          },
                          {
                              href: '/sunglasses-men',
                              title: 'Men'
                          }
                      ]
                  },
                  {
                      href: '',
                      title: 'HOME TRY ON',
                  },
                  {
                      href: '',
                      title: 'PAIR FOR PAIR',
                  },
              ]
          }
      }

}
</script>

<style>
.logo{
  height:100px;
  width: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items:center ;
  /* background: teal; */
}
.v-sidebar-menu{background-color:#ffffff}
.v-sidebar-menu .vsm--link{color:rgb(0, 0, 0)}
.v-sidebar-menu .vsm--icon{ display: none}
.v-sidebar-menu .vsm--item {
    display: block;
    position: static!important;
    white-space: nowrap;
    width: 100%;
    background-color: whitesmoke;
}
.vsm--link_active {
    -webkit-box-shadow: inset 3px 0 0 0 #d4dff0;
    box-shadow: inset 3px 0 0 0 #ffffff;
}
.vsm--link_level-1.vsm--link_open {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
}
.main{
  z-index:10000;
  margin-left:50px;
}

</style>
