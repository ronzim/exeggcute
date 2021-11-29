// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

// library.add(fas, far);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      options: { customProperties: true },
      light: {
        primary: "#007ec3"
      }
    }
  }
});
