import Vue from 'vue'

import VueHtmlToPaper from 'vue-html-to-paper';
 
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/css/uikit.css',
    'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css'
  ]
}
 
Vue.use(VueHtmlToPaper, options);