<script setup lang="ts">
import {useShare} from "@vueuse/core";
import {mdiShare} from "@mdi/js";

const {isSupported, share} = useShare();
import {defineProps} from "vue";

const props = defineProps<{
  url: URL,
  title: string
}>()


function shareItem() {
  return share({
    url: props.url.toString(),
    title: props.title
  })
}
</script>

<template>
  <div v-if="isSupported" class="mt-16 mb-8 flex items-center w-full justify-center">
    <button @click=shareItem class="fill-info btn btn-neutral">
      <svg viewBox="0 0 24 24" class="h-7 w-7">
        <path :d="mdiShare"/>
      </svg>
      Teilen
    </button>
  </div>
</template>
<style scoped>

</style>