import { state } from "@/store/modules/article/state";

export const getters = {
  articles: () => state.articles,
};
