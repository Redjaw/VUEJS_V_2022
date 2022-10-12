import { createI18n } from 'vue-i18n'

const messages = {
    'en-US': import('@/i18n/en-US/messages.json'),
    'it-IT': import('@/i18n/it-IT/messages.json')
}
const datetimeFormats = {
    'it-IT': {
        "short": {
             "dateStyle":"short"
        },
        "long": {
            "year": 'numeric', "month": 'short', "day": 'numeric',
            "weekday": 'short', "hour": 'numeric', "minute": 'numeric',
            "timeZone": 'Europe/Rome',
        }
    },
    'en-US': {
        "short": {
             "dateStyle":"short"
        },
        "long": {
            "year": 'numeric', "month": 'short', "day": 'numeric',
            "weekday": 'short', "hour": 'numeric', "minute": 'numeric',
            "timeZone": 'America/Los_Angeles',
        }
    }
}
const i18n = createI18n({
    locale: 'en-US',
    fallbackLocale: 'it-IT',
    messages: messages,
    datetimeFormats: datetimeFormats
})

export default i18n