import Vue from "vue";
import Vuex from "vuex";
import nestInstence from "@/api/instences/instence";

Vue.use(Vuex);

// Разбить на модули
// actions mutations index.js и т.п. и делаешь директорию modules/articles/ actions mutations index.js
const store = new Vuex.Store({
  state: {
    textMenuBtn: "Написать статью",
    path: "/article",
    articles: null,
    comments: null,
  },
  mutations: {
    // Поменять наименование мутации, CHANGE_ON_ARTICLES
    changeOnArticles(state) {
      state.textMenuBtn = "Вернуться к статьям";
      state.path = "/articles";
    },
    changeOnCreateArticle(state) {
      state.textMenuBtn = "Написать статью";
      state.path = "/article";
    },
    // заменить на setArticles и setComments
    SET_VALUE(state, { field, value }) {
      state[field] = value;
    },
    setArticles(state, payload) {
      state.articles = payload;
    },
    setComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    //Для начала нужно сделать так чтобы ахиос всегда понимал что нам нужно стучаться на бэкэнд по урлу ххтпп/127.0.0.1/глобальный префикс бэк приложения
    // Оборачиваем в try catch, console.error
    async setArticles({ commit }) {
      const res = await nestInstence.get(`/articles`);
      if (res.status === 200) {
        commit("setArticles", res.data);
      }
    },
    async setComments({ commit }, articleId) {
      const res = await nestInstence.get(`/article/${articleId}/comments`);
      if (res.status === 200) {
        commit("setComments", res.data);
      }
    },
  },
  getters: {},
});

export default store;
