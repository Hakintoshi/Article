import nestInstence from "@/api/instences/instence";

export const actions = {
  async setComments({ commit }, articleId) {
    try {
      const res = await nestInstence.get(`/article/${articleId}/comments`);
      if (res.data?.status === 200 && res.data?.data) {
        commit("SET_VALUE", { field: "comments", value: res.data.data });
      }
    } catch (e) {
      console.error(e);
    }
  },
  async updateComment(store, payload) {
    try {
      const { commentText, articleId, commentId } = payload;
      const comment = {
        text: commentText,
      };
      // запрос, вынос в actions
      await nestInstence.patch(
        `/article/${articleId}/comment/${commentId}`,
        comment,
      );
    } catch (e) {
      console.error(e);
    }
  },
  async deleteComment(store, payload) {
    try {
      await nestInstence.delete(
        `/article/${payload.articleId}/comment/${payload.commentId}`,
      );
    } catch (e) {
      console.error(e);
    }
  },
};
