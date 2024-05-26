import en from './en.json'
import ru from './ru.json'
import { initNavigatorLanguage } from '~/functions/initNavigatorLanguage'

export const languages = {
  en,
  ru
}

const storageLang = JSON.parse(localStorage.getItem('language'))?.value | 'en'
export const defaultLocale = storageLang || initNavigatorLanguage(Object.keys(languages))
