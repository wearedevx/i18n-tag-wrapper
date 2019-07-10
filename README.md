# i18n-tag-wrapper

> A wrapper to [es2015-i18n-tag](https://github.com/skolmer/es2015-i18n-tag) for use with Next.js

## Usage

```js
import translatorSetup from 'i18n-tag-wrapper'
import fr from './locales/fr'
import de from './locales/de'

const locales = { fr, de }
const default = fr

const getTranslator = translatorSetup({ default, plurals })

const T = getTranslator("fr")

let name = "Henri"

T`Hello ${name)}`
// Bonjour Henri

```

## Locale configuration files

Example:

```js
{
  locales: 'de-DE',
  // group: 'my-lib', // Optional, can be used to avoid configuration overrides. This is recommended for libraries!
  translations: {
      'Hello ${0}': 'Hallo, ${0}',
      'You have ${0} notifications:none': 'Sie habe keine Mitteilung',
      'You have ${0} notifications:one': 'Sie habe eine Mitteilung',
      'You have ${0} notifications:few': 'Sie habe zwei Mitteilungen',
      'You have ${0} notifications:many': 'Sie habe ${0} Mitteilungen',
      'You have ${0} horses:none': 'Sie haben kein Pferd',
      'You have ${0} horses:one': 'Sie haben ein Pferd',
      'You have ${0} horses:zwei': 'Sie haben zwei Pferde',
      'You have ${0} horses:many': 'Sie haben ${0} Pfrede',
  },
  number: {
      currency: 'EUR' // Intl NumberFormat options as described here: https://goo.gl/pDwbG2
  },
  date: {
      [...options] // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
  },
  /**
   * @param {number} n Number of things
   * @returns {'none'|'one'|'few'|'many'|'other'}
   */
  plurals: (n) => {
    return n == 0 ?
      'none'
    : n == 1 ?
      'one'
    : n == 2 ?
      'few'
    : 'many'
  }
}
```

## Plurals

Locale files **must** export a `plurals(n)` function with the following signature:

```ts
type Purals = (n: integer) -> "none"|"one"|"few"|"many"|"other"
```

Depending on the pluralization rules for your language, `plurals()` may return
not return all variants. English, for instance only requires "one" and "many", but
Polish will require all of them.

In the translations (under the `translations` key in the locale file), each
translation requiring plural handling should have as many keys as there are
variants returned by the `plurals()` function. Each key should by appended with
the variant it handles.

Long sentences are no match for good examples:

```js
// /locale/de.js
{
  locales: 'de-DE',
  /*
   * Germans like to write 0 as kein(e), 1 as ein(e), and 2 as zwei, using
   * numbers for higher values.
   */
  plurals: (n) => {
    return n == 0 ?
      'none'
    : n == 1 ?
      'one'
    : n == 2 ?
      'few'
    : 'many'
  }
  translations: {
    'Hello ${0}': 'Hallo, ${0}',
    /*
      * Plurals returns 4 possible variants, either: none, one, few or many
      * The "You have ${0} notifications" must have 4 variants
      */
    'You have ${0} notifications:none': 'Sie habe keine Mitteilung',
    'You have ${0} notifications:one': 'Sie habe eine Mitteilung',
    'You have ${0} notifications:few': 'Sie habe zwei Mitteilungen',
    'You have ${0} notifications:many': 'Sie habe ${0} Mitteilungen',
  }
}
```

Using it:

```js
T.some(0, 'You have ${0} notifications')
// Sie habe keine Mitteilung

T.some(1, 'You have ${0} notifications')
// Sie habe eine Mitteilung

T.some(2, 'You have ${0} notifications')
// Sie habe zwei Mitteilungen

T.some(1000, 'You have ${0} notifications')
// Sie habe 1,000 Mitteilungen
```
