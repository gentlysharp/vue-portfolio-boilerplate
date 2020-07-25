<template>
  <v-app-bar app clipped-left clipped-right>
    <v-app-bar-nav-icon
      @click="toggleLeftDrawer = !toggleLeftDrawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>dot bolierplate</v-toolbar-title>

    <v-tabs class="flex-row-reverse d-none d-sm-none d-md-flex">
      <v-tab
        v-for="menu in $store.state.core.menus"
        :key="menu.title"
        @click="route(menu.path)"
        >{{ menu.title }}</v-tab
      >
      <v-tab></v-tab>
    </v-tabs>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    route(path) {
      this.$router.push({ path: path });
    },
  },
  computed: {
    toggleLeftDrawer: {
      get() {
        return this.$store.state.core.leftDrawer;
      },
      set(newVal) {
        this.$store.commit("core/toggleLeftDrawer", newVal);
      },
    },
  },
};
</script>

<style></style>
