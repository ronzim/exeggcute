<template>
  <v-card class="text-center pa-4">
    <DropZone :onFileLoad="doSomething" :maxFileSize="5000000" />
  </v-card>
</template>

<script>
import DropZone from "@/components/DropZone.vue";

export default {
  name: "Home",
  components: {
    DropZone
  },
  methods: {
    doSomething: file => {
      console.log("do something with this file", file);
    }
  }
};
</script>
