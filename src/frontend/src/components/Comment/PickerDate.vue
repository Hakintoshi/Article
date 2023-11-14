<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="title"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer />
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="sendDate"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "PickerDate",
  props: {
    title: { type: String },
  },
  data: () => ({
    date: null,
    menu: false,
  }),
  methods: {
    sendDate() {
      this.$refs.menu.save(this.date);
      this.menu = false;
      this.$emit("setDate", this.date);
    },
  },
};
</script>
