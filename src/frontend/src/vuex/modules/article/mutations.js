export const mutations = {
  SET_VALUE: (state, { field, value }) => {
    state[field] = value;
  },
  CLEAR_ARTICLE_FIELDS: (state) => {
    state.articleTitle = "";
    state.articleBody = "";
  },
};
