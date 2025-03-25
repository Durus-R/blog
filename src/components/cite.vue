<template>
  <div class="text-container">
    <p class="text-accent min-h-8">
      {{ displayedText }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

function random_cite() {
  const cites = [
    "Magnus machte nichts falsch.",
    "Solvara braucht dich, tapferer Krieger.",
    "Bitte Alt+F4 drücken, um das nächste Zitat zu laden.",
    "Lorem ipsum sed amet.",
    "#?$%&/()=+*~",
    "#!/bin/bash nazis",
    "'); DROP TABLE users; --",
    "Das ist ein Zitat.",
    "For the greater food.",
    "Cadia stands. By Chaos.",
    "Ich bin Alpharius.",
    "Rock and Stone!",
    "Bitte nicht stören.",
    "<CENSORED>",
    "Powered by Astro. Developed by Caffeine.",
    "Diese Website läuft auf einer vKartoffel mit arm64-Architektur."
  ];
  return cites[Math.floor(Math.random() * cites.length)];
}

const cite = ref(random_cite());
const displayedText = ref("");
const typing = ref(false);

function startTyping() {
  typing.value = true;
  displayedText.value = "";
  let i = 0;

  const interval = setInterval(() => {
    displayedText.value += cite.value[i];
    i++;
    if (i === cite.value.length) {
      clearInterval(interval);
      typing.value = false;
    }
  }, 50);
}

setInterval(() => {
  if (!typing.value) {
    cite.value = ""
    cite.value = random_cite();
    startTyping();
  }
}, 5000);

startTyping();
</script>