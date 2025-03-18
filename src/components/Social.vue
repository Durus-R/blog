<script setup>
import {computed, ref} from "vue";
import {mdiGithub, mdiButterfly as mdiBsky, mdiLinkedin, mdiMoonWaningCrescent, mdiTwitch, mdiWeatherSunny} from "@mdi/js"

const githubURL = "https://github.com/durus-r"
const linkedinURL = "https://www.linkedin.com/in/rene-regensbogen/"
const twitchURL = "https://www.twitch.tv/durusvt"
const bskyUrl = "https://bsky.app/profile/durusr.com"

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
const darkModeMap = {
  light: 'theLightTheme',
  dark: 'theDarkTheme'
}
const darkMode = ref(getCookie('theme') || 'light')
document.documentElement.setAttribute('data-theme', darkModeMap[darkMode.value])

function toggleDarkmode() {
  if (darkMode.value === 'light') {
    darkMode.value = 'dark'
  } else {
    darkMode.value = 'light'
  }
  document.documentElement.setAttribute('data-theme', darkModeMap[darkMode.value])
  setCookie('theme', darkMode.value, 365)
}

const darkModeIcon = computed(() => darkMode.value === 'light' ? mdiMoonWaningCrescent : mdiWeatherSunny)
</script>
<template>
  <div class="my-5">
    <div
        class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-y-2 gap-2 justify-center w-full">

      <button @click=toggleDarkmode
              class="fill-info btn btn-neutral"
              aria-label="Toggle Darkmode"
      >

        <svg viewBox="0 0 24 24" class="h-7 w-7">
          <path :d="darkModeIcon"/>
        </svg>

      </button>
      <a :href=githubURL>
        <button
            aria-label="Github Profile"
            class="fill-info btn btn-neutral">
          <svg viewBox="0 0 24 24" class="h-7 w-7">
            <path :d=mdiGithub></path>
          </svg>
        </button>
      </a>

      <!-- TODO: rss Url -->
      <a :href=linkedinURL>
        <button
            aria-label="Linkedin Profile"
            class="fill-info btn hover:btn-base-100 btn-neutral">
          <svg viewBox="0 0 24 24" class="h-7 w-7">
            <path :d=mdiLinkedin></path>
          </svg>
        </button>
      </a>

      <a :href=twitchURL>
        <button
            aria-label="Twitch Channel"
            class="fill-info btn hover:btn-base-100 btn-neutral">
          <svg viewBox="0 0 24 24" class="h-7 w-7">
            <path :d=mdiTwitch></path>
          </svg>
        </button>
      </a>

      <a :href=bskyUrl>
        <button
            aria-label="Bsky Profile"
            class="fill-info btn hover:btn-base-100 btn-neutral">
          <svg viewBox="0 0 24 24" class="h-7 w-7">
            <path :d=mdiBsky></path>
          </svg>
        </button>
      </a>

    </div>
  </div>
</template>