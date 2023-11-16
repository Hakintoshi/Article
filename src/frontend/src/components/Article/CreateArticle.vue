<template>
  <div>
    <v-alert v-if="successCreate" class="success-alert" type="success">
      Статья создана
    </v-alert>
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
              v-model="articleFormData.title"
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
              v-model="articleFormData.body"
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

export default {
  name: "CreateArticle",
  props: {
    isDialog: { type: Boolean, default: false },
    title: { type: String },
    body: { type: String },
  },
  data: () => ({
    articleFormData: {
      title: "",
      body: "",
    },
    errorTitle: false,
    successCreate: false,
  }),
  computed: {
    // переменные для создания статьи дергать из mapState
    // ...mapState('articles', {
    //   articlesTitle: state => state.articlesTitle,
    // }),
    btnDisabled() {
      return this.articleFormData.title.trim().length >= 4
          && this.articleFormData.body.trim().length >= 25;
    },
  },
  mounted() {
    if (this.$router.currentRoute.fullPath === "/article") {
      this.$store.commit("changeOnArticles");
    }
    this.updateArticleData();
  },
  methods: {
    // обернуть в try catch
    createArticle() {
      this.articleFormData.title.trim();
      this.articleFormData.body.trim();
      // this.articleFormData поместить в state
      // вынести в action
      // вызывать с помощью mapActions
      nestInstence.post("/article", this.articleFormData).then(() => {
        this.successCreate = true;
        this.articleFormData.title = "";
        this.articleFormData.body = "";
      });
      // лишнее убрать это делать по мере прихода ответа
      setTimeout(() => {
        this.successCreate = false;
        this.$router.push("/articles");
        this.$store.state.textMenuBtn = "Написать статью";
      }, 2000);

      this.errorTitle = false;
    },
    close() {
      this.$emit("closeDialog");
    },
    send() {
      const titleLen = this.articleFormData.title.trim().length;
      const bodyLen = this.articleFormData.body.trim().length;
      if (titleLen < 4 || bodyLen < 25) {
        this.errorTitle = true;
        return;
      }
      this.$emit("sendData", this.articleFormData);
    },
    updateArticleData() {
      // сделать через мутацию
      if (this.title && this.body) {
        this.articleFormData.title = this.title;
        this.articleFormData.body = this.body;
      }
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

.success-alert {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 250px;
}
</style>
