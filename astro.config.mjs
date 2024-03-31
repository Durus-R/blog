import {defineConfig, squooshImageService} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    image: {
        service: squooshImageService()
    },
    integrations: [tailwind(), mdx(), vue({
        jsx: true,
        appEntrypoint: "./src/vue.js"
    })]
});