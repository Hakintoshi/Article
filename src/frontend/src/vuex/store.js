import Vue from "vue";
import Vuex from "vuex";
// import nestInstence from "@/api/instences/instence";
import { article } from "@/vuex/modules/article/index";
import comment from "@/vuex/modules/comment/index";

Vue.use(Vuex);

// Разбить на модули
// actions mutations index.js и т.п. и делаешь директорию modules/articles/ actions mutations index.js
const store = new Vuex.Store({
  state: {
    textMenuBtn: "Написать статью",
    path: "/article",
    successCreate: false,
  },
  mutations: {
    // Поменять наименование мутации, CHANGE_ON_ARTICLES
    CHANGE_ON_ARTICLES(state) {
      state.textMenuBtn = "Вернуться к статьям";
      state.path = "/articles";
    },
    CHANGE_ON_CREATE_ARTICLE(state) {
      state.textMenuBtn = "Написать статью";
      state.path = "/article";
    },
    SHOW_NOTIFICATION(state) {
      state.successCreate = true;
      setTimeout(() => {
        state.successCreate = false;
      }, 1000);
    },
    // заменить на setArticles и setComments
  },
  getters: {},
  modules: { article, comment },
});

export default store;
