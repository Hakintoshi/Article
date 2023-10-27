<template>
  <div class="analytic-comments d-flex flex-column mx-auto my-6">
    <router-link to="/articles">
      <v-btn color="primary"> Вернуться к статьям </v-btn>
    </router-link>
    <h3 class="analytic-comments__title text-h4 pt-6 pl-6">
      Чтобы получить аналитику комментариев укажите дату от и дату до
    </h3>
    <div class="analytic-comments__menu mt-4">
      <PickerDate title="Дата от" @setDate="setDateFrom" />
      <PickerDate title="Дата до" @setDate="setDateTo" />
      <v-spacer />
      <v-btn @click="getComments"> Получить аналитику </v-btn>
    </div>
    <div v-if="sections" class="comments-table d-flex pt-10">
      <div v-if="sections.length > 0">
        <div v-for="[articleId, comments] in sections" :key="articleId">
          <ArticleTitle :article-id="articleId" :quantity="comments.length" />
          <p
            v-for="(comment, i) in comments"
            :key="i"
            class="comments-table__cell"
          >
            {{ i + 1 }}. {{ comment }}
          </p>
        </div>
      </div>
      <div v-else>Нет комментариев за данный период</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PickerDate from "@/components/Comment/PickerDate";
import ArticleTitle from "@/components/Analytic/ArticleTitle";

export default {
  name: "AnalyticComment",
  components: {
    PickerDate,
    ArticleTitle,
  },
  data: () => ({
    dateTo: null,
    dateFrom: null,
    comments: null,
    sections: null,
  }),
  methods: {
    getSections() {
      if (!this.comments) return;
      const sections = {};
      for (let i = 0; i < this.comments.length; i++) {
        if (!sections[this.comments[i].articleId]) {
          sections[this.comments[i].articleId] = [];
        }
        sections[this.comments[i].articleId].push(this.comments[i].text);
      }
      this.sections = Object.entries(sections);
    },
    setDateFrom(date) {
      this.dateFrom = new Date(date).getTime();
    },
    setDateTo(date) {
      this.dateTo = new Date(date).getTime() + 86400000;
    },
    getComments() {
      if (!this.dateTo || !this.dateFrom) return;
      axios
        .get(
          `http://localhost:3001/analytic/comments/?dateFrom=${this.dateFrom}&dateTo=${this.dateTo}`,
        )
        .then((res) => {
          this.comments = res.data;
          this.getSections();
        });
    },
  },
};
</script>

<style>
.analytic-comments {
  width: 1000px;
}
.analytic-comments__title {
  width: 900px;
  margin: 0px auto;
}
.analytic-comments__menu {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
