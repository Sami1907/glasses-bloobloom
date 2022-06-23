import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue"
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

createApp(App).use(router).mount("#app");
