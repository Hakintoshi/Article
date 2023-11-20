<template>
  <div class="mt-6 mb-10">
    <router-link to="/analytic">
      <v-btn color="green accent-4"> Аналитика комментариев </v-btn>
    </router-link>
    <v-alert v-if="successCreate" class="success-alert" type="success">
      Статья создана
    </v-alert>
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
    ...mapActions("article", ["SET_ARTICLES"]),
  },
  computed: {
    ...mapGetters("article", ["ARTICLES"]),
    ...mapState(["successCreate"]),
    articlesIsNotEmpty() {
      return this.ARTICLES?.length > 0;
    },
  },
  mounted() {
    this.SET_ARTICLES();
    if (this.$router.currentRoute.fullPath === "/articles") {
      this.$store.commit("CHANGE_ON_CREATE_ARTICLE");
    }
  },
};
</script>

<style>
.success-alert {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 250px;
}
</style>
