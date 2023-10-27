<template>
  <div>
    <v-card width="600" class="mx-auto px-2 mt-3">
      <div class="d-flex">
        <v-card-title>
          <h4>{{ title }}</h4>
        </v-card-title>
        <v-spacer />
        <v-card-actions>
          <v-btn color="primary" @click="onArticle(id)"> Читать </v-btn>
          <v-btn color="red accent-3" @click="deleteArticle(id)">
            <v-icon color="white"> mdi-delete </v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArialArticle",
  props: {
    title: { type: String, required: true },
    id: { type: Number, required: true },
  },
  data: () => ({}),
  methods: {
    onArticle(id) {
      this.$router.push(`/article/${id}`);
    },
    deleteArticle(id) {
      axios.delete(`http://localhost:3001/article/${id}`);
      this.$store.state.articles = this.$store.state.articles.filter(
        (article) => article.article_id !== id,
      );
    },
  },
};
</script>
