import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: {
                    base: "#2CA7A4",
                    lighten1:'#F2FFFF;'
                },
                secondary: "#333333", // black for font
                orange: "#FF7C1E",
                
                white: "#ffffff",
                // error: '#b71c1c',
            },
            dark: {
                primary: {
                    base: "#FF7C1E",
                },
                secondary: "#333333",
                orange: "#FF7C1E",
                white: "#ffffff",
                // error: '#b71c1c',
            },
        },
    },
});
