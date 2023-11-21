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
      <SnackBar ref="snackBar"></SnackBar>
    </v-main>
  </v-app>
</template>

<script>
import ArealMain from "@/components/ArealMain.vue";
import SnackBar from "@/components/SnackBar.vue";

export default {
  name: "App",

  components: {
    ArealMain,
    SnackBar,
  },

  data: () => ({
    path: "/article",
    textMenuBtn: "Написать статью",
  }),
  mounted() {
    this.$root.SnackBar = this.$refs.snackBar;
  },
  methods: {
    toCreateArticle() {
      this.$router.push(this.$store.state.path);
      const mutationType =
        this.$router.currentRoute.fullPath === "/article"
          ? "CHANGE_ON_ARTICLES"
          : "CHANGE_ON_CREATE_ARTICLE";
      this.$store.commit(mutationType);
      this.path = "/articles";
    },
  },
};
</script>

<style>
.btn-write-article {
  background-color: white;
}
</style>
