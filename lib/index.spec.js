const configs = require('./__fixtures__')
const i18nSetup = require('./index')

describe('i18n-tag-wrapper', () => {
  it('translates a simple string', () => {
    const getTranslator = i18nSetup(configs)
    const T = getTranslator('fr')

    const name = "Monsieur"

    expect(T`Hello ${name}`).toEqual("Bonjour Monsieur")
  })

  it('uses default if translation is not found', () => {
    const getTranslator = i18nSetup(configs)
    const T = getTranslator('de')

    const name = "Monsieur"

    expect(T`Hello ${name}`).toEqual("Bonjour Monsieur")
  })

  it('pluralizes', () => {
    const getTranslator = i18nSetup(configs)
    const T = getTranslator('fr')

    expect(T`You have ${T.some(10, "horse")}`).toEqual("Vous avez 10 chevaux")
    expect(T`You have ${T.some(0, "horse")}`).toEqual("Vous avez aucun cheval")
    expect(T`You have ${T.some(1, "horse")}`).toEqual("Vous avez 1 cheval")
  })

  it('defaults unknown plurals', () => {
    const getTranslator = i18nSetup(configs)
    const T = getTranslator('fr')

    expect(T`There are ${T.some(10, "item")}`).toEqual("There are 10 items")
    expect(T`There are ${T.some(1, "item")}`).toEqual("There are 1 item")
    expect(T`There are ${T.some(0, "item")}`).toEqual("There are 0 item")
  })
})