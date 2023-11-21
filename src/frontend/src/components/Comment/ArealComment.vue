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
    ...mapActions("comment", ["setComments", "updateComment", "deleteComment"]),
    async remove() {
      await this.deleteComment(this.idForUrl);
      await this.setComments(this.articleId);
    },
    async update(commentText) {
      await this.updateComment({ commentText, ...this.idForUrl });
      await this.setComments(this.articleId);
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
