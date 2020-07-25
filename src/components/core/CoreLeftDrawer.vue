<template>
  <v-navigation-drawer
    v-model="leftDrawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <v-list-group
        v-for="menu in $store.state.core.menus"
        :key="menu.title"
        :prepend-icon="menu.icon"
        no-action
        @click="route(menu.path)"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="submenu in menu.submenus"
          :key="submenu.title"
          @click="route(submenu.path)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ submenu.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon class="px-0" small>{{ submenu.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    route(path) {
      this.$router.push({ path: path });
    },
  },
  computed: {
    leftDrawer: {
      get() {
        return this.$store.state.core.leftDrawer;
      },
      set() {},
    },
  },
};
</script>

<style></style>
