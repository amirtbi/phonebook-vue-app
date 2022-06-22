import actions from "./actions.js";
import mutations from "./mutations";
import getters from "./getters.js";
import { createStore } from "vuex";

const store = new createStore({
  state() {
    return {
      contacts: [],
      selectedContact: null,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;
