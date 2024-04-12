import { createApp } from 'vue';
import App from './App.vue';

import '@fortawesome/fontawesome-free/css/all.css';




import { register } from 'swiper/element/bundle';
import router from './routes/route';

// register Swiper custom elements
register();

const app = createApp(App);

// Define the global variable
app.config.globalProperties.$globalVariable = '../assets/images/author.png';
app.config.globalProperties.$globalVariable2 = true;

app.use(router).mount('#app');
