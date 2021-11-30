import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: true,
    themes: {
      dark: {
        primary: "#219ebc",
        secondary: "#8ecae6",
        background: "#023047",
        error: "#fb8500",
        accent: "#ffb703"
      }
    }
  }
});
