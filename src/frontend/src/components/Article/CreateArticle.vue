<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <v-form class="form py-4 px-7" @submit.prevent="createArticle()">
        <h5 class="text-h5 d-flex justify-center">
          Форма для написания статьи
        </h5>
        <v-alert v-if="errorTitle" type="error" class="mt-2">
          Заголовок не меньше 4 и текст не меньше 10 символов
        </v-alert>
        <div class="mt-4">
          <label
            >Введите заголовк статьи
            <v-text-field
              :value="articleTitle"
              @input="updateTitleArticle"
              placeholder="Не меньше 4 символов"
              full-width
              solo
              class="form__field"
            />
          </label>
        </div>
        <div>
          <label
            >Введите текст статьи
            <v-textarea
              :value="articleBody"
              @input="updateBodyArticle"
              placeholder="Не меньше 10 символов"
              solo
            />
          </label>
        </div>
        <div v-if="isDialog" class="d-flex">
          <v-btn color="primary" text @click="close"> Закрыть </v-btn>
          <v-spacer />
          <v-btn color="primary" text @click="send"> Отправить </v-btn>
        </div>
        <div v-else>
          <v-btn
            type="submit"
            color="primary"
            width="100%"
            :disabled="btnDisabled"
          >
            Опубликовать
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { constants } from "@/const";

export default {
  name: "CreateArticle",
  props: {
    isDialog: { type: Boolean, default: false },
  },
  data: () => ({
    errorTitle: false,
  }),
  computed: {
    ...mapState("article", {
      articleTitle: (state) => state.articleTitle,
      articleBody: (state) => state.articleBody,
    }),

    btnDisabled() {
      return (
        this.articleTitle.trim().length < constants.MIN_LENGTH_ARTICLE_TITLE ||
        this.articleBody.trim().length < constants.MIN_LENGTH_ARTICLE_BODY
      );
    },
    articleData() {
      return {
        title: this.articleTitle,
        body: this.articleBody,
      };
    },
  },
  mounted() {
    if (this.$router.currentRoute.fullPath === "/article") {
      this.CHANGE_ON_ARTICLES();
    }
  },
  methods: {
    ...mapActions("article", ["updateTitle", "updateBody", "create"]),
    ...mapMutations("article", ["CLEAR_ARTICLE_FIELDS"]),
    ...mapMutations(["CHANGE_ON_ARTICLES", "CHANGE_ON_CREATE_ARTICLE"]),
    updateTitleArticle(e) {
      this.updateTitle(e);
    },
    updateBodyArticle(e) {
      this.updateBody(e);
    },

    async createArticle() {
      try {
        this.articleTitle.trim();
        this.articleBody.trim();
        await this.create(this.articleData);
        this.CLEAR_ARTICLE_FIELDS();
        this.$router.push("/articles");
        this.CHANGE_ON_CREATE_ARTICLE();
        this.errorTitle = false;
        this.$root.SnackBar.show({ message: constants.ARTICLE_CREATE });
      } catch (e) {
        this.$root.SnackBar.show({
          message: constants.ARTICLE_CREATE_ERROR,
          color: "red",
        });
      }
    },
    close() {
      this.CLEAR_ARTICLE_FIELDS();
      this.$emit("closeDialog");
    },
    send() {
      const titleLen = this.articleTitle.trim().length;
      const bodyLen = this.articleBody.trim().length;
      // Вынести числа в константы
      if (
        titleLen < constants.MIN_LENGTH_ARTICLE_TITLE ||
        bodyLen < constants.MIN_LENGTH_ARTICLE_BODY
      ) {
        this.errorTitle = true;
        return;
      }
      this.$emit("sendData", {
        title: this.articleTitle,
        body: this.articleBody,
      });
      this.CLEAR_ARTICLE_FIELDS();
    },
  },
};
</script>

<style>
.form {
  width: 700px;
  background-color: #ffffff;
  border: 2px solid #1976d2;
  border-radius: 15px;
}
</style>
