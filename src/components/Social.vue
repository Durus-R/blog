<template>

  <div
      class="social-links"
  >
    <v-btn rounded="lg" class="me-5" :icon="mdiGithub" :href="githubURL"></v-btn>

    <v-btn rounded="lg" :icon="mdiLinkedin" :href="linkedinURL"></v-btn>

    <!-- TODO: rss Url -->


  </div>
</template>
<script setup lang="ts">
import 'vuetify/styles';
import {mdiGithub, mdiLinkedin} from "@mdi/js";

const githubURL = 'https://github.com/durus-r/'
const linkedinURL = 'https://linkedin.com/in/rene-regensbogen/'
</script>
<style lang="scss">

.social-links {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.125rem;
  justify-content: center;
  width: 25%;
}

.v-icon svg {
  transition: transform 0.2s ease-in-out;
}

.v-icon:hover svg {
  transform: scale(1.3);
}

.v-icon:hover {
  color: var(--accent)
}
</style>