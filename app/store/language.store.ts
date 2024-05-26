import { defaultLocale } from "~/i18n"

const defaultValue = {
  value: defaultLocale
}

export const useLanguageStore = defineStore('language', {
  state: () => defaultValue,
  actions: {
    changeLanguage(language) {
      this.value = language
    },
  },
  persist: {
    storage: persistedState.localStorage
  }

})
