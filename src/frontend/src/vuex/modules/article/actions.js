import nestInstence from "@/api/instences/instence";

export const actions = {
  async SET_ARTICLES({ commit }) {
    try {
      const res = (await nestInstence.get(`/articles`)).data;
      if (res.status === 200) {
        commit("SET_VALUE", { field: "articles", value: res.data });
      }
    } catch (e) {
      console.error(e);
    }
  },
  UPDATE_TITLE({ commit }, titleText) {
    commit("SET_VALUE", { field: "articleTitle", value: titleText });
  },
  UPDATE_BODY({ commit }, bodyText) {
    commit("SET_VALUE", { field: "articleBody", value: bodyText });
  },
  async GET_ARTICLE({ commit }, articleId) {
    try {
      const article = (await nestInstence.get(`/article/${articleId}`)).data;
      commit("SET_VALUE", { field: "article", value: article.data });
    } catch (e) {
      console.error(e);
    }
  },
};
