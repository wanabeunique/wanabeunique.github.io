import { languages, defaultLocale } from './i18n/index.js'
const messages = Object.assign(languages)

export default defineI18nConfig(() => ({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages 
}))

