<template>
  <div class="comment mb-4 py-4 px-6">
    <p>{{ text }}</p>
    <div class="d-flex justify-end">
      <CommentDialog
        :existing-text="text"
        class="d-flex align-center"
        @updateComment="updateComment"
      >
        <v-icon>mdi-pencil</v-icon>
      </CommentDialog>
      <v-btn color="red accent-3" small class="ml-4" @click="deleteComment">
        <v-icon color="white"> mdi-delete </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import nestInstence from "@/api/instences/instence";
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
  methods: {
    ...mapActions(["SET_COMMENTS"]),
    async deleteComment() {
      await nestInstence.delete(
        `/article/${this.articleId}/comment/${this.id}`,
      );
      await this.SET_COMMENTS(this.articleId);
    },
    async updateComment(commentText) {
      const comment = {
        text: commentText,
      };
      // запрос, вынос в actions
      await nestInstence.patch(
        `/article/${this.articleId}/comment/${this.id}`,
        comment,
      );
      await this.SET_COMMENTS(this.articleId);
    },
  },
};
</script>

<style>
.comment {
  background-color: white;
  border-radius: 15px;
}
</style>
