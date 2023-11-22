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
      const res = await nestInstence.get(`/article/${articleId}`);
      if (res.data?.status === 200 && res.data?.data) {
        commit("SET_VALUE", { field: "article", value: res.data.data });
      }
    } catch (e) {
      console.error(e);
    }
  },
  async update(store, payload) {
    try {
      await nestInstence.patch(
        `/article/${payload.articleId}`,
        payload.article,
      );
    } catch (e) {
      console.error(e);
    }
  },
  async removeArticle(store, articleId) {
    try {
      await nestInstence.delete(`/article/${articleId}`);
    } catch (e) {
      console.error(e);
    }
  },
  async create(store, articleData) {
    try {
      await nestInstence.post("/article", articleData);
    } catch (e) {
      console.error(e);
    }
  },
};
