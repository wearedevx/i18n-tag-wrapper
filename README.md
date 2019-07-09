# i18n-tag-wrapper

> A wrapper to [es2015-i18n-tag](https://github.com/skolmer/es2015-i18n-tag) for use with Next.js

## Usage

```js
import translatorSetup from 'i18n-tag-wrapper'
import fr from './locales/fr'
import de from './locales/de'

const locales = { fr, de }
const default = fr

const plurals = {
  "horse": {
    none: "no horse",
    many: "horses"
  }
}

const getTranslator = translatorSetup({ locales, default, plurals })

const T = getTranslator("fr")

T`You have ${T.some(10, "horse")}`
// Vous avez 10 chevaux

```