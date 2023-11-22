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
    <Comments :article-id="$route.params.id" />
  </div>
</template>

<script>
import ArticleDialog from "@/components/Article/ArticleDialog.vue";
import Comments from "../Comment/Comments.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "FullArticle",
  components: {
    ArticleDialog,
    Comments,
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapState("article", {
      article: (state) => state.article,
    }),
  },
  async created() {
    await this.getArticle(this.$route.params.id);
  },
  methods: {
    ...mapActions("article", ["getArticle", "update"]),
    async updateArticle(articleData) {
      const article = {
        title: articleData.title,
        body: articleData.body,
      };
      const articleId = this.$route.params.id;
      await this.update({
        articleId: articleId,
        article,
      });
      this.$root.SnackBar.show({ message: "Статья обновлена" });
      await this.getArticle(articleId);
    },
  },
};
</script>

<style>
.article {
  width: 1000px;
  background-color: #e3f2fd;
  word-wrap: break-word;
}
</style>
