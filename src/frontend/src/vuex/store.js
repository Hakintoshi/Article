import Vue from "vue";
import Vuex from "vuex";
import { article } from "./modules/article/index";
import { comment } from "./modules/comment/index";
import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

Vue.use(Vuex);

// Разбить на модули
// actions mutations index.js и т.п. и делаешь директорию modules/articles/ actions mutations index.js
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: { article, comment },
});

export default store;
