import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/normalize.css";

createApp(App).use(router).mount("#app");

// const toggleButton = document.getElementById("toggle-button");
// const naviList = document.getElementById("navi-list");

// toggleButton.addEventListener("click", () => {
//   naviList.classList.toggle("active");
// });
