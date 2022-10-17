import { createStore } from 'vuex'
import { i18nInfoStore } from "./i18n";


export const store = createStore({
  modules: {
    i18n: i18nInfoStore,
  }
})
