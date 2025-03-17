import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/metalib/remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService()
  },
  integrations: [tailwind(), mdx(), vue()],
  site: "https://durusr.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

});