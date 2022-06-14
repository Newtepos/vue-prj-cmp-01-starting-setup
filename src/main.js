import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const VueApp = createApp(App);
VueApp.component('base-card', BaseCard);
VueApp.component('base-button', BaseButton);
VueApp.component('base-dialog', BaseDialog);
VueApp.mount('#app');
