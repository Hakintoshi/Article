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
import nestInstence from "@/api/instences/instence";
import { mapActions } from "vuex";

export default {
  name: "ArialArticle",
  props: {
    // указать default значение
    title: { type: String, required: false, default: () => "Заголовок статьи" },
    id: { type: Number, required: true },
  },
  data: () => ({}),
  methods: {
    ...mapActions("article", ["SET_ARTICLES"]),
    onArticle(id) {
      this.$router.push(`/article/${id}`);
    },
    async deleteArticle(id) {
      // использовать async await
      await nestInstence.delete(`/article/${id}`);
      // Поменять на запрос
      await this.SET_ARTICLES();
    },
  },
};
</script>
