<template>
  <div class="comment mb-4 py-4 px-6">
    <p>{{ text }}</p>
    <div class="d-flex justify-end">
      <CommentDialog
        :existing-text="text"
        class="d-flex align-center"
        @updateComment="update"
      >
        <v-icon>mdi-pencil</v-icon>
      </CommentDialog>
      <v-btn color="red accent-3" small class="ml-4" @click="remove">
        <v-icon color="white"> mdi-delete </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import CommentDialog from "@/components/Comment/CommentDialog";
import { mapActions } from "vuex";
import { constants } from "@/const";

export default {
  name: "ArealComment",
  components: {
    CommentDialog,
  },
  props: {
    text: { type: String, required: true },
    id: { type: Number, required: true },
    articleId: { type: String, required: true },
  },
  computed: {
    idForUrl() {
      return {
        articleId: this.articleId,
        commentId: this.id,
      };
    },
  },
  methods: {
    ...mapActions("comment", ["getComments", "updateComment", "deleteComment"]),
    async remove() {
      const status = await this.deleteComment(this.idForUrl);
      if (status) {
        this.$root.SnackBar.show({ message: constants.COMMENT_DELETE });
        await this.getComments(this.articleId);
      } else {
        this.$root.SnackBar.show({
          message: constants.COMMENT_DELETE_ERROR,
          color: "red",
        });
      }
    },
    async update(commentText) {
      const status = await this.updateComment({
        commentText,
        ...this.idForUrl,
      });
      if (status) {
        this.$root.SnackBar.show({ message: constants.COMMENT_UPDATE });
        await this.getComments(this.articleId);
      } else {
        this.$root.SnackBar.show({
          message: constants.COMMENT_UPDATE_ERROR,
          color: "red",
        });
      }
    },
  },
};
</script>

<style>
.comment {
  background-color: white;
  border-radius: 15px;
  word-wrap: break-word;
}
</style>
