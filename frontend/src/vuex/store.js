import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    textMenuBtn: "Написать статью",
    path: "/article",
    articles: null,
    comments: null,
  },
  mutations: {
    changeOnArticles(state) {
      state.textMenuBtn = "Вернуться к статьям";
      state.path = "/articles";
    },
    changeOnCreateArticle(state) {
      state.textMenuBtn = "Написать статью";
      state.path = "/article";
    },
    setArticles(state, payload) {
      state.articles = payload;
    },
    setComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    async setArticles({ commit }) {
      const res = await axios.get("http://localhost:3001/articles");
      if (res.status === 200) {
        commit("setArticles", res.data);
      }
    },
    async setComments({ commit }, articleId) {
      const res = await axios.get(
        `http://localhost:3001/article/${articleId}/comments`,
      );
      if (res.status === 200) {
        commit("setComments", res.data);
      }
    },
  },
  getters: {},
});

export default store;
