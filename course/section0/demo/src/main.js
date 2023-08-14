import { createApp } from "vue";
import { createPinia } from "pinia";
import capitalizePlugin from '@/plugins/capitalize';
import 'animate.css'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(createPinia()).use(capitalizePlugin);

app.mount("#app");
