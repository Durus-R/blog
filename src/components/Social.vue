<template>

  <div class="social-links my-4">
    <div
        class="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-2 gap-y-2 gap-2 justify-center w-full"
    >
      <v-btn variant="elevated" :icon="mdiGithub" :href="githubURL"></v-btn>

      <v-btn :icon="mdiLinkedin" :href="linkedinURL"></v-btn>

      <!-- TODO: rss Url -->


    </div>
  </div>
</template>
<script setup lang="ts">
import 'vuetify/styles';
import {mdiGithub, mdiLinkedin} from "@mdi/js";

const githubURL = 'https://github.com/durus-r/'
const linkedinURL = 'https://linkedin.com/in/rene-regensbogen/'
</script>
<style scoped>
</style>