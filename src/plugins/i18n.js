
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import fa from '../locales/fa.json'
var locale = JSON.parse(localStorage.getItem("profile"));
console.log('locale')
console.log(locale)
console.log(locale[0].locale)
const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || locale[0].locale,
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        en,
        fa
    }
})

export default i18n
