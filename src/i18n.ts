import { computed } from "vue";
import * as VueI18n from "vue-i18n";
import { store } from "./store";

const i18nInfoGetter = {
  locale: computed(() => store.state.i18n.locale),
};

export const i18n = VueI18n.createI18n({
  locale: i18nInfoGetter.locale.value,
  legacy: false,
  fallbackLocale: "en",
  messages: {
    en: {
    },
    "zh-CN": {
    },
  },
});

const i18nOperator = {
  async changeLocale(locale: "en" | "zh-CN") {
    (i18n.global.locale.value = locale), store.commit("i18n/setLocale", locale);
    await store.dispatch("i18n/save");
  },
};

export const t = i18n.global.t;
export const locale = i18n.global.locale;

export function changeLocale(locale: "en" | "zh-CN") {
  i18nOperator.changeLocale(locale);
}
