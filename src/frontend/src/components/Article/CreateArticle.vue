<template>
  <div>
    <div class="d-flex justify-center mt-8">
      <v-form class="form py-4 px-7" @submit.prevent="createArticle()">
        <h5 class="text-h5 d-flex justify-center">
          Форма для написания статьи
        </h5>
        <v-alert v-if="errorTitle" type="error" class="mt-2">
          Заголовок не меньше 4 и текст не меньше 25 символов
        </v-alert>
        <div class="mt-4">
          <label
            >Введите заголовк статьи
            <v-text-field
              :value="this.articleTitle"
              @input="updateTitle"
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
              :value="this.articleBody"
              @input="updateBody"
              placeholder="Не меньше 24 символов"
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
import nestInstence from "@/api/instences/instence";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "CreateArticle",
  props: {
    isDialog: { type: Boolean, default: false },
  },
  data: () => ({
    errorTitle: false,
  }),
  computed: {
    // переменные для создания статьи дергать из mapState
    // ...mapState('articles', {
    //   articlesTitle: state => state.articlesTitle,
    // }),
    ...mapState("article", {
      articleTitle: (state) => state.articleTitle,
      articleBody: (state) => state.articleBody,
    }),

    btnDisabled() {
      return !(
        this.articleTitle.trim().length >= 4 &&
        this.articleBody.trim().length >= 4
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
      this.$store.commit("CHANGE_ON_ARTICLES");
    }
  },
  methods: {
    ...mapActions("article", ["UPDATE_TITLE", "UPDATE_BODY"]),
    ...mapMutations("article", ["CLEAR_ARTICLE_FIELDS"]),
    updateTitle(e) {
      this.UPDATE_TITLE(e);
    },
    updateBody(e) {
      this.UPDATE_BODY(e);
    },
    // обернуть в try catch
    async createArticle() {
      try {
        this.articleTitle.trim();
        this.articleBody.trim();
        // this.articleFormData поместить в state
        // вынести в action
        // вызывать с помощью mapActions
        await nestInstence.post("/article", this.articleData);
        this.CLEAR_ARTICLE_FIELDS();
        // лишнее убрать это делать по мере прихода ответа
        await this.$router.push("/articles");
        this.$store.commit("CHANGE_ON_CREATE_ARTICLE");
        this.errorTitle = false;
        this.$store.commit("SHOW_NOTIFICATION");
      } catch (e) {
        console.error(e);
      }
    },
    close() {
      this.$emit("closeDialog");
    },
    send() {
      const titleLen = this.articleTitle.trim().length;
      const bodyLen = this.articleBody.trim().length;
      if (titleLen < 4 || bodyLen < 25) {
        this.errorTitle = true;
        return;
      }
      this.$emit("sendData", {
        title: this.articleTitle,
        body: this.articleBody,
      });
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
