<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon>mdi-note-multiple</v-icon>
        <div class="text-h4">Areal</div>
      </div>
      <v-spacer />
      <v-btn
        class="btn-write-article"
        outlined
        color="primary"
        @click="toCreateArticle"
      >
        {{ $store.state.textMenuBtn }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <ArealMain />
    </v-main>
  </v-app>
</template>

<script>
import ArealMain from "@/components/ArealMain.vue";

export default {
  name: "App",

  components: {
    ArealMain,
  },

  data: () => ({
    path: "/article",
    textMenuBtn: "Написать статью",
  }),
  methods: {
    toCreateArticle() {
      this.$router.push(this.$store.state.path);
      if (this.$router.currentRoute.fullPath === "/article") {
        this.$store.commit("changeOnArticles");
        this.path = "/articles";
      } else {
        (this.path = "/article"), this.$store.commit("changeOnCreateArticle");
      }
    },
  },
};
</script>

<style>
.btn-write-article {
  background-color: white;
}
</style>
