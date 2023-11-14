<template>
  <div class="title mb-4">
    <h5 class="text-h5">
      Статья - {{ title }}<span> ({{ quantity }} комментариев )</span>
    </h5>
  </div>
</template>

<script>
import nestInstence from "@/api/instences/instence";

export default {
  name: "ArticleTitle",
  props: {
    articleId: { type: String },
    quantity: { type: Number },
  },
  data: () => ({
    title: null,
  }),
  mounted() {
    nestInstence
      .get(`/article/${this.articleId}`)
      .then((res) => (this.title = res.data.title));
  },
};
</script>

<style>
.title {
  width: 1000px;
  background-color: aquamarine;
}
</style>
