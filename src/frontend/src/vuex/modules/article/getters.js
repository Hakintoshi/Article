import { state } from "@/vuex/modules/article/state";

export const getters = {
  ARTICLES: () => {
    return state.articles;
  },
};
