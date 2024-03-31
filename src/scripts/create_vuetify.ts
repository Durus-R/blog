import type {App} from 'vue'

import {createVuetify} from "vuetify";
// @ts-ignore
import {aliases, mdi} from 'vuetify/lib/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default (app : App) => {
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
            defaultTheme: 'dark'
        },
        ssr: true

    });
    app.use(vuetify)
};