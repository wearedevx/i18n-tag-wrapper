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

    expect(T.some(10, "You have ${0} horses")).toEqual("Vous avez 10 chevaux")
    expect(T.some(0, "You have ${0} horses")).toEqual("Vous n'avez pas de cheval")
    expect(T.some(1, "You have ${0} horses")).toEqual("Vous avez un cheval")
  })

  it('defaults unknown plurals', () => {
    const getTranslator = i18nSetup(configs)
    const T = getTranslator('fr')

    expect(T.some(10, "There are ${0} items")).toEqual("There are 10 items")
    expect(T.some(1, "There are ${0} items")).toEqual("There are 1 items")
    expect(T.some(0, "There are ${0} items")).toEqual("There are 0 items")
  })
})