import nestInstence from "@/api/instences/instence";

export const actions = {
  async getArticleComments({ commit }, payload) {
    try {
      if (!payload.dateTo || !payload.dateFrom) {
        return;
      }

      const res = await nestInstence.get(
        `/analytic/comments/?dateFrom=${payload.dateFrom}&dateTo=${payload.dateTo}`,
      );
      if (res.data?.status === 200 && res.data?.data) {
        commit("SET_VALUE", { field: "sections", value: res.data.data });
      }
    } catch (e) {
      console.error(e);
    }
  },
};
