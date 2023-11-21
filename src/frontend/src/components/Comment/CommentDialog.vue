<template>
  <div>
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template #activator="{ on, attrs }">
            <v-btn color="primary" :small="isProps" v-bind="attrs" v-on="on">
              <slot />
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Новый комментарий</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="commentText"
                      label="Комментарий"
                      required
                      solo
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="blue darken-1" text @click="close"> Закрыть </v-btn>
              <v-btn color="blue darken-1" text @click="send">
                Отправить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  name: "CommentDialog",
  props: {
    existingText: { type: String },
  },
  data: () => ({
    dialog: false,
    commentText: "",
  }),
  computed: {
    isProps() {
      return !!this.existingText;
    },
  },
  methods: {
    close() {
      this.dialog = false;
      this.commentText = "";
    },
    send() {
      if (this.commentText.trim().length < 1) return;
      this.dialog = false;
      this.$emit(
        this.existingText ? "updateComment" : "sendComment",
        this.commentText,
      );
      this.commentText = "";
    },
  },
};
</script>
