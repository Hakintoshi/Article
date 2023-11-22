import nestInstence from "@/api/instences/instence";

export const actions = {
  // Переименовать метод
  async setArticles({ commit }) {
    try {
      const res = await nestInstence.get(`/articles`);
      if (res.data?.status === 200 && res.data?.data) {
        commit("SET_VALUE", { field: "articles", value: res.data.data });
      }
    } catch (e) {
      console.error(e);
    }
  },
  updateTitle({ commit }, titleText) {
    commit("SET_VALUE", { field: "articleTitle", value: titleText });
  },
  updateBody({ commit }, bodyText) {
    commit("SET_VALUE", { field: "articleBody", value: bodyText });
  },
  async getArticle({ commit }, articleId) {
    try {
      // Вынести запрос в переменную
      const article = (await nestInstence.get(`/article/${articleId}`)).data;
      commit("SET_VALUE", { field: "article", value: article.data });
    } catch (e) {
      console.error(e);
    }
  },
};
