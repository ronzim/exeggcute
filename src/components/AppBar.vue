<template>
  <v-app-bar app color="primary">
    <!-- image as bar background -->
    <!-- src="https://picsum.photos/1920/1080?random" -->

    <!-- nice effect on image -->
    <!-- <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template> -->

    <!-- hamburger icon  -->
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title class="text-h5 font-weight-bold">{{
      title
    }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn-toggle color="secondary">
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/about">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    title: String
  }
};
</script>
