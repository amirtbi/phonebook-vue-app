// FILE: main.js
import { createApp } from "vue";

import router from "./router/router.js";
import store from "./store/store.js";
// Import tailwindcss
import "./index.css";
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);
myApp.use(router);
myApp.use(store);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
