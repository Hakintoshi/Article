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
import { constants } from "@/const";

export default {
  name: "ArialArticle",
  props: {
    title: { type: String, required: false, default: () => "Заголовок статьи" },
    id: { type: Number, required: true },
  },
  data: () => ({}),
  methods: {
    ...mapActions("article", ["getArticles", "removeArticle"]),
    onArticle(id) {
      this.$router.push(`/article/${id}`);
    },
    async deleteArticle(id) {
      const status = await this.removeArticle(id);
      if (status) {
        this.$root.SnackBar.show({ message: constants.ARTICLE_DELETE });
        await this.getArticles();
      } else {
        this.$root.SnackBar.show({
          message: constants.ARTICLE_DELETE_ERROR,
          color: "red",
        });
      }
    },
  },
};
</script>
