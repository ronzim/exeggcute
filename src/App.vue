<template>
  <!-- App.vue -->

  <v-app>
    <!-- <v-navigation-drawer app> -->
    <!-- -->
    <!-- </v-navigation-drawer> -->

    <!-- Bar -->
    <AppBar title="App Title" />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  components: { AppBar }
};
</script>

<style></style>
