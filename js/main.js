import {createApp} from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import $ from 'jquery'

// Vue Single Instance.
const customApp = {
  data() {
    return {
      message: "Learn Vue"
    }
  },
  mounted () {
    console.log('mounted')
  },
}
const customTags = document.querySelectorAll('.custom')
for (const customTag of customTags) {
  createApp(customApp).mount(customTag)
}


// Vue Single File Component.
const app = createApp(App)
app.mount('#app')


// Jquery 
console.log($('body'))
