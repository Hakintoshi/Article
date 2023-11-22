<template>
  <div class="comments my-4 py-6 px-8">
    <h4 class="text-h4 d-flex justify-center mb-6">Комментарии</h4>
    <div class="btn-add">
      <CommentDialog @sendComment="createComment">
        Добавить комментарий
      </CommentDialog>
    </div>
    <template v-if="commentsIsNotEmpty">
      <ArealComment
        v-for="comment in COMMENTS"
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
import ArealComment from "@/components/Comment/ArealComment.vue";
import CommentDialog from "@/components/Comment/CommentDialog.vue";
import { mapActions, mapGetters } from "vuex";
import { constants } from "@/const";

export default {
  name: "ArealComments",
  components: {
    ArealComment,
    CommentDialog,
  },
  props: {
    articleId: { type: String, required: true },
  },
  data: () => ({
    dialog: false,
  }),
  // На created
  async created() {
    await this.setComments(this.articleId);
  },
  methods: {
    ...mapActions("comment", ["setComments", "create"]),
    async createComment(commentText) {
      try {
        const comment = {
          text: commentText,
        };
        await this.create({ articleId: this.articleId, comment });
        this.$root.SnackBar.show({ message: constants.COMMENT_CREATE });
        await this.setComments(this.articleId);
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed: {
    ...mapGetters("comment", ["COMMENTS"]),
    commentsIsNotEmpty() {
      return this.COMMENTS?.length > 0;
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
