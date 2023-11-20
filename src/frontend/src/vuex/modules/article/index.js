import { state } from "@/vuex/modules/article/state";
import { mutations } from "@/vuex/modules/article/mutations";
import { actions } from "@/vuex/modules/article/actions";
import { getters } from "@/vuex/modules/article/getters";

export const article = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
