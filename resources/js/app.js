import { createApp } from 'vue';
import BackToTop from './components/BackToTop.vue';
import CounterValue from './components/CounterValue.vue';

import './bootstrap';

const app = createApp({});

app.component('back-to-top', BackToTop);
app.component('counter-value', CounterValue);

app.mount('#app');
