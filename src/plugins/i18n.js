import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    home: "Home",
    dashboard: "Dashboard",
    login: "Login",
    signup: "Sign Up",
    login_to: "Login to ",
    reset_pw_instructions:
      "Enter your email, a password recovery link will be sent to your inbox",
    undo: "Undo",
    reset_pw: "Reset Password",
    login_email: "Enter your email and password to login",
    create_account: "Create an account",
    register: "Register"
  },
  it: {}
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "it", // set fallback locale
  messages // set locale messages
});

export default i18n;
