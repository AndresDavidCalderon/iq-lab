import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../service_worker.js');
  }
});
