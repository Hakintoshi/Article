import Vue from "vue";
import Vuex from "vuex";
import nestInstence from "@/api/instences/instence";

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
    //Для начала нужно сделать так чтобы ахиос всегда понимал что нам нужно стучаться на бэкэнд по урлу ххтпп/127.0.0.1/глобальный префикс бэк приложения
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
