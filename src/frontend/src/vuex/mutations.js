export const mutations = {
  CHANGE_ON_ARTICLES(state) {
    state.textMenuBtn = "Вернуться к статьям";
    state.path = "/articles";
  },
  CHANGE_ON_CREATE_ARTICLE(state) {
    state.textMenuBtn = "Написать статью";
    state.path = "/article";
  },
};
