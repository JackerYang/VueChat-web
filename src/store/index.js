import Vue from "vue";
import Vuex from "vuex";
import chat from "./modules/chat";
import shop from "./modules/shop";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat,
    shop,
    common
  }
});
