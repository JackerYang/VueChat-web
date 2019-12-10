import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import plugin from "./assets/js/directive";
import ViewDesign from "./assets/js/view-design";

Vue.config.productionTip = false;

import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";


import contentmenu from "v-contextmenu";
import "v-contextmenu/dist/index.css";

Vue.use(Viewer);
Vue.use(plugin);
Vue.use(contentmenu);

Viewer.setDefaults({
  zIndexInline: 9999,
  title: false,
  url(image) {
    return image.id;
  }
});

Vue.use(ViewDesign);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
