import { state } from "@/vuex/modules/article/state";

export const getters = {
  // ARTICLES - cameCase
  ARTICLES: () => state.articles,
};
