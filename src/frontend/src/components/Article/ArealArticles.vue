<template>
  <div class="mt-6 mb-10">
    <router-link to="/analytic">
      <v-btn color="green accent-4" class="analytic-btn">
        Аналитика комментариев
      </v-btn>
    </router-link>
    <div class="d-flex justify-center my-6">
      <h3 class="text-h3">Статьи</h3>
    </div>
    <template v-if="articlesIsNotEmpty">
      <ArealArticle
        v-for="article in this.ARTICLES"
        :id="article.article_id"
        :key="article.article_id"
        :title="article.title"
      />
    </template>
    <div v-else class="d-flex justify-center mt-12">
      <h3 class="text-h3">Нет статьей</h3>
    </div>
  </div>
</template>

<script>
import ArealArticle from "@/components/Article/ArealArticle.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "ArealArticles",
  components: {
    ArealArticle,
  },
  data: () => ({}),
  methods: {
    ...mapActions("article", ["setArticles"]),
  },
  computed: {
    ...mapGetters("article", ["ARTICLES"]),
    ...mapState(["successCreate"]),
    articlesIsNotEmpty() {
      return this.ARTICLES?.length > 0;
    },
  },
  mounted() {
    this.setArticles();
    if (this.$router.currentRoute.fullPath === "/articles") {
      this.$store.commit("CHANGE_ON_CREATE_ARTICLE");
    }
  },
};
</script>

<style>
.analytic-btn {
  position: fixed;
  left: 10px;
}
</style>
