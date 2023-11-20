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
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import nestInstence from "@/api/instences/instence";
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
    error: null,
    dialog: false,
  }),
  mounted() {
    this.GET_ARTICLE(this.$route.params.id);
  },
  methods: {
    // try catch, actions
    ...mapActions("article", ["GET_ARTICLE"]),
    async updateArticle(articleData) {
      try {
        const article = {
          title: articleData.title,
          body: articleData.body,
        };
        console.log(article);
        await nestInstence.patch(`/article/${this.$route.params.id}`, article);
        await this.GET_ARTICLE(this.$route.params.id);
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed: {
    ...mapState("article", {
      article: (state) => state.article,
    }),
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
