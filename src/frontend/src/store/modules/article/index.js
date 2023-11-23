import { state } from "@/store/modules/article/state";
import { mutations } from "@/store/modules/article/mutations";
import { actions } from "@/store/modules/article/actions";
import { getters } from "@/store/modules/article/getters";

export const article = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
