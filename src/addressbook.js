import Vue from 'vue'
import App from './app.vue'
import VueResource from 'vue-resource'
require("../style/addressbook.css");

Vue.use(VueResource)

new Vue({
  el: '#addressbook',
  components: { App }
})