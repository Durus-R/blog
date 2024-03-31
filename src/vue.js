import {createVuetify} from "vuetify";
import {aliases, mdi} from 'vuetify/lib/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default (app) => {
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
        }

    });
    app.use(vuetify)
};