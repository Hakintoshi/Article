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
          @updateArticleData="update"
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
import { constants } from "@/const";

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
    ...mapActions("article", ["getArticle", "updateArticle"]),
    async update(articleData) {
      const article = {
        title: articleData.title,
        body: articleData.body,
      };
      const articleId = this.$route.params.id;
      const status = await this.updateArticle({
        articleId: articleId,
        article,
      });
      if (status) {
        this.$root.SnackBar.show({ message: constants.ARTICLE_UPDATE });
        await this.getArticle(articleId);
      } else {
        this.$root.SnackBar.show({
          message: constants.ARTICLE_UPDATE_ERROR,
          color: "red",
        });
      }
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
