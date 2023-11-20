<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="700px">
          <template #activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">
              Изменить статью
            </v-btn>
          </template>
          <v-card color="primary">
            <CreateArticle
              :is-dialog="true"
              @closeDialog="close"
              @sendData="send"
            />
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
import CreateArticle from "./CreateArticle.vue";

export default {
  name: "ArticleDialog",
  components: {
    CreateArticle,
  },
  props: {
    // default
    title: { type: String, default: () => "" },
    body: { type: String, default: () => "" },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    close() {
      this.dialog = false;
    },
    send(articleData) {
      this.dialog = false;
      this.$emit("updateArticleData", articleData);
    },
  },
};
</script>

<style></style>
