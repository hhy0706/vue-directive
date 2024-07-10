// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Directives from './directives'
import i18nPlugin from './plugins/i18n'
const app = createApp(App);
app.use(Directives,{
    age:11
});
app.use(i18nPlugin,{
    greetings: {
        hello: 'Bonjour!'
      }
});
app.mount('#app')
