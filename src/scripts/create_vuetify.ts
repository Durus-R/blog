import type {App} from 'vue'

import {createVuetify} from "vuetify";
// @ts-ignore
import {aliases, mdi} from 'vuetify/lib/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default (app: App) => {
    const vuetify = createVuetify({
            components: {
                ...components,
            },
            directives,
            icons: {
                defaultSet: 'mdi',
                aliases,
                sets: {
                    mdi
                }
            },
            theme: {
                defaultTheme: 'dark',
                themes: {
                    "dark": {
                        dark: true,
                        colors: {
                            primary: "#d26019",
                            secondary: "#424242",
                            accent: "#ff9403",
                            error: "#FF5252",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FFC107"
                        }
                    }
                }

            },
            ssr: true

        })
    ;
    app.use(vuetify)
};