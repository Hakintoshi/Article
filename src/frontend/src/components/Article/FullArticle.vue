<template>
  <div class="d-flex flex-column align-center mt-6">
    <div v-if="article" class="article py-4 px-6">
      <h2 class="text-h2">
        {{ article.title }}
      </h2>
      <p class="mt-4">
        {{ article.body }}
      </p>
      <div class="d-flex align-center">
        <router-link to="/articles">
          <v-btn color="primary"> Вернуться к стаьям </v-btn>
        </router-link>
        <v-spacer />
        <ArticleDialog
          :title="article.title"
          :body="article.body"
          @updateArticleData="updateArticle"
        >
          Изменить статью
        </ArticleDialog>
      </div>
    </div>
    //вынести в computed
    <Comments :article-id="$route.params.id" />
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import nestInstence from "@/api/instences/instence";
import ArticleDialog from "@/components/Article/ArticleDialog.vue";
import Comments from "../Comment/Comments.vue";

export default {
  name: "FullArticle",
  components: {
    ArticleDialog,
    Comments,
  },
  data: () => ({
    article: null,
    error: null,
    dialog: false,
  }),
  mounted() {
    this.getArticle();
  },
  methods: {
    // try catch, actions
    getArticle() {
      nestInstence
        .get(`/article/${this.$route.params.id}`)
        .then((res) => (this.article = res.data))
        .catch((res) => (this.error = res.response.data.message));
    },
    // try catch, actions
    updateArticle(articleData) {
      const article = {
        title: articleData.title,
        body: articleData.body,
      };
      nestInstence
        .patch(`/article/${this.$route.params.id}`, article)
        .then(() => this.getArticle());
    },
  },
};
</script>

<style>
.article {
  width: 1000px;
  background-color: #e3f2fd;
}
</style>
