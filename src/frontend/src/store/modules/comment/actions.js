import nestInstence from "@/api/instences/instence";

export const actions = {
  async getComments(store, articleId) {
    try {
      const res = await nestInstence.get(`/article/${articleId}/comments`);
      if (res.data?.status === 200 && res.data?.data) {
        store.commit("SET_VALUE", { field: "comments", value: res.data.data });
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
      const res = await nestInstence.patch(
        `/article/${articleId}/comment/${commentId}`,
        comment,
      );
      if (res.data?.status === 200) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
  async deleteComment(store, payload) {
    try {
      const res = await nestInstence.delete(
        `/article/${payload.articleId}/comment/${payload.commentId}`,
      );
      if (res.data?.status === 200) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
  async createComment(store, payload) {
    try {
      const res = await nestInstence.post(
        `/article/${payload.articleId}/comment`,
        payload.comment,
      );
      if (res.data?.status === 201) {
        return res.data.status;
      }
    } catch (e) {
      console.error(e);
    }
  },
};
