import nestInstence from "@/api/instences/instence";

export const actions = {
  async SET_COMMENTS({ commit }, articleId) {
    const res = (await nestInstence.get(`/article/${articleId}/comments`)).data;
    if (res.status === 200) {
      console.log(res);
      commit("SET_VALUE", { field: "comments", value: res.data });
    }
  },
};
