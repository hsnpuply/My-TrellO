
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueDragscroll from "vue-dragscroll";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import '../src/style.css'

const app = createApp(App)

app.use(VueDragscroll);
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
