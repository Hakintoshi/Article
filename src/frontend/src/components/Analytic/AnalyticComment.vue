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
      <v-btn @click="getAnalytic"> Получить аналитику </v-btn>
    </div>
    <div v-if="sectionsNotEmpty" class="table-section mt-10">
      <div v-for="section in sections" :key="section.articleId" class="section">
        <h4 class="text-h4">Статья: {{ section.title }}</h4>
        <h5 class="text-h5 my-2">
          Список комментариев ({{ section.comments?.length }})
        </h5>
        <div
          v-for="comment in section.comments"
          :key="comment.comment_id"
          class="section-table__comment"
        >
          <div>
            <p>Комментарий оставлен: {{ formatDate(comment.createdAt) }}</p>
            <p>{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="sectionIsEmpty">Нет комментариев за данный период</div>
  </div>
</template>

<script>
import PickerDate from "@/components/Analytic/PickerDate.vue";
import { constants } from "@/const";
import { formatDate } from "@/utils";
import { mapActions, mapState } from "vuex";

export default {
  name: "AnalyticComment",
  components: {
    PickerDate,
  },
  data: () => ({
    dateTo: null,
    dateFrom: null,
  }),
  methods: {
    ...mapActions(["getArticleComments"]),
    setDateFrom(date) {
      this.dateFrom = new Date(date).getTime();
    },
    setDateTo(date) {
      this.dateTo = new Date(date).getTime() + constants.ONE_DAY;
    },
    getAnalytic() {
      const range = {
        dateTo: this.dateTo,
        dateFrom: this.dateFrom,
      };
      this.getArticleComments(range);
    },
    formatDate,
  },
  computed: {
    ...mapState({
      sections: (state) => state.sections,
    }),
    sectionsNotEmpty() {
      return this.sections?.length > 0;
    },
    sectionIsEmpty() {
      return this.sections?.length === 0;
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
.table-section {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 1000px;
}
.section {
  padding: 10px 20px;
  border-bottom: 1px solid black;
}
.section-table__comment {
  width: 950px;
  word-wrap: break-word;
}
</style>
