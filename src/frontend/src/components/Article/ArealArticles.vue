<template>
  <div class="mt-6 mb-10">
    <router-link to="/analytic">
      <v-btn color="green accent-4"> Аналитика комментариев </v-btn>
    </router-link>
    <div class="d-flex justify-center my-6">
      <h3 class="text-h3">Статьи</h3>
    </div>
    // Условия выносим в computed
    <template v-if="$store.state.articles?.length > 0">
      <ArealArticle
        v-for="article in $store.state.articles"
        :id="article.article_id"
        :key="article.article_id"
        :title="article.title"
      />
    </template>
    <div v-else>Нет статей</div>
  </div>
</template>

<script>
import ArealArticle from "@/components/Article/ArealArticle.vue";

export default {
  name: "ArealArticles",
  components: {
    ArealArticle,
  },
  data: () => ({}),
  mounted() {
    this.$store.dispatch("setArticles");
  },
};
</script>
