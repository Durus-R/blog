import {defineConfig, squooshImageService} from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import vuetifyPlugin from "vite-plugin-vuetify";

// https://astro.build/config

function vuetify(options) {
    return {
        name: 'astro-vuetify-integration',
        hooks: {
            'astro:config:setup': ({ updateConfig }) => {
                updateConfig({
                    vite: {
                        ssr: {
                            noExternal: ['vuetify'],
                        },
                        plugins: [vuetifyPlugin({
                            styles: "src/styles/main.scss"
                        })],
                    },
                });
            },
        },
    }
}

export default defineConfig({
    image: {
        service: squooshImageService()
    },

    integrations: [mdx(), vue({
        jsx: true,
        appEntrypoint: "./src/scripts/create_vuetify.ts"
    }), vuetify()],
    vite: {
        ssr: {
            noExternal: ["vuetify"]
        }
    }
});