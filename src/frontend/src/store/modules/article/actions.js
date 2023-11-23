import nestInstence from "@/api/instences/instence";

export const actions = {
  async getArticles({ commit }) {
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
  async updateArticle(store, payload) {
    try {
      const res = await nestInstence.patch(
        `/article/${payload.articleId}`,
        payload.article,
      );
      if (res.data?.status === 200) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
  async removeArticle(store, articleId) {
    try {
      const res = await nestInstence.delete(`/article/${articleId}`);
      if (res.data?.status === 200) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
  async createArticle(store, articleData) {
    try {
      const res = await nestInstence.post("/article", articleData);
      if (res.data?.status === 201) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
};
