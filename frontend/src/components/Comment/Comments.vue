<template>
  <div class="comments my-4 py-6 px-8">
    <h4 class="text-h4 d-flex justify-center mb-6">Комментарии</h4>
    <div class="btn-add">
      <CommentDialog @sendComment="saveComment">
        Добавить комментарий
      </CommentDialog>
    </div>
    <template v-if="$store.state.comments.length > 0">
      <ArealComment
        v-for="comment in $store.state.comments"
        :id="comment.comment_id"
        :key="comment.comment_id"
        :text="comment.text"
        :article-id="articleId"
      />
    </template>
    <div v-else class="d-flex justify-center mt-10 text-h5">
      Нет комментариев
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArealComment from "@/components/Comment/ArealComment.vue";
import CommentDialog from "@/components/Comment/CommentDialog.vue";

export default {
  name: "FullArticle",
  components: {
    ArealComment,
    CommentDialog,
  },
  props: {
    articleId: { type: String, required: true },
  },
  data: () => ({
    error: null,
    dialog: false,
  }),
  mounted() {
    this.$store.dispatch("setComments", this.articleId);
  },
  methods: {
    getComments() {
      axios
        .get(`http://localhost:3001/article/${this.articleId}/comments`)
        .then((res) => (this.$store.state.comments = res.data));
    },
    saveComment(commentText) {
      const comment = {
        text: commentText,
      };
      axios
        .post(
          `http://localhost:3001/article/${this.articleId}/comment`,
          comment,
        )
        .then(() => this.$store.dispatch("setComments", this.articleId));
    },
  },
};
</script>

<style>
.comments {
  width: 1000px;
  background-color: #e3f2fd;
  position: relative;
}
.btn-add {
  position: absolute;
  right: 30px;
  top: 40px;
}
</style>
