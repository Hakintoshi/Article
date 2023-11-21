<template>
  <v-snackbar
    :color="color"
    :timeout="timer"
    v-model="showSnackbar"
    absolute
    right
    top
    class="snackbar"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  data() {
    return {
      showSnackbar: false,
      message: "",
      color: "success",
      timer: 2000,
    };
  },
  methods: {
    show(data) {
      this.message = data.message || 'missing "message"';
      this.color = data.color || "success";
      this.timer = data.timer || 2000;
      this.showSnackbar = true;
    },
  },
};
</script>
