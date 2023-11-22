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
import { mapActions } from "vuex";

export default {
  name: "ArialArticle",
  props: {
    title: { type: String, required: false, default: () => "Заголовок статьи" },
    id: { type: Number, required: true },
  },
  data: () => ({}),
  methods: {
    ...mapActions("article", ["setArticles", "removeArticle"]),
    onArticle(id) {
      this.$router.push(`/article/${id}`);
    },
    async deleteArticle(id) {
      await this.removeArticle(id);
      this.$root.SnackBar.show({ message: "Статья удалена" });
      await this.setArticles();
    },
  },
};
</script>
