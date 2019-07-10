global.Intl = require('intl')

require('intl/locale-data/jsonp/fr-FR.js')
require('intl/locale-data/jsonp/de-DE.js')
Intl.__applyLocaleSensitivePrototypes()

const i18n_tag = require('es2015-i18n-tag')
const i18n = i18n_tag.default
const i18nConfig = i18n_tag.i18nConfig

let currentConfig

module.exports = ({ locales, default: defaultConfig }) => {
  i18n.some = (i, sentence) => {
    const plurals = currentConfig.plurals

    const variant = plurals(i)
    const translation = i18n.translate(`${sentence}:${variant}`, i)

    return translation.replace(new RegExp(`:${variant}$`, 'g'), '')
  }

  currentConfig = defaultConfig
  i18nConfig(defaultConfig)

  const setLang = (lang) => {
    if (Object.keys(locales).includes(lang)) {
      const config = locales[lang]

      currentConfig = config
      i18nConfig(config)
    }

    return i18n
  }

  setLang.T = i18n

  return setLang
}