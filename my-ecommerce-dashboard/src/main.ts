// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // If you have Vue Router set up
import store from './store'; // Import the store here

const app = createApp(App);

app.use(router); // Use Vue Router
app.use(store); // Use Vuex store

app.mount('#app');
