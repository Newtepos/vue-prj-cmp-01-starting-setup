import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

const VueApp = createApp(App);
VueApp.component('base-card', BaseCard);
VueApp.mount('#app');
