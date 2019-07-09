global.Intl = require('intl')

require('intl/locale-data/jsonp/fr-FR.js')
require('intl/locale-data/jsonp/de-DE.js')
Intl.__applyLocaleSensitivePrototypes()

const i18n_tag = require('es2015-i18n-tag')
const i18n = i18n_tag.default
const i18nConfig = i18n_tag.i18nConfig

module.exports = ({ locales, default: defaultConfig, plurals }) => {
  i18n.some = (i, name) => {
    if (i == 0) {
      return i18n.translate(plurals[name].none)
    }
    else if (i < 2) {
      return i18n.translate(`\${0} ${name}`, i)
    }
    else {
      return i18n.translate(`\${0} ${plurals[name].many}`, i)
    }
  }

  i18nConfig(defaultConfig)

  const setLang = (lang) => {
    if (Object.keys(locales).includes(lang)) {
      const config = locales[lang]

      i18nConfig(config)
    }

    return i18n
  }

  setLang.T = i18n

  return setLang
}