const fr = {
  locales: 'fr-FR',
  // group: 'my-lib', // Optional, can be used to avoid configuration overrides. This is recommended for libraries!
  translations: {
      'Hello ${0}': 'Bonjour ${0}',
      'You have ${0} notifications:none': 'Vous n\'avez pas de notification',
      'You have ${0} notifications:one': 'Vous une notification',
      'You have ${0} notifications:many': 'Vous avez ${0} notifications',
      'You have ${0} horses:none': 'Vous n\'avez pas de cheval',
      'You have ${0} horses:one': 'Vous avez un cheval',
      'You have ${0} horses:many': 'Vous avez ${0} chevaux',
  },
  number: {
      currency: 'EUR' // Intl NumberFormat options as described here: https://goo.gl/pDwbG2
  },
  // date: {
  //     [...options] // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
  // },
  plurals: (n) => {
    return n == 0 ?
      'none'
    : n == 1 ?
      'one'
    : 'many'
  }
}

const de = {
  locales: 'fr-FR',
  // group: 'my-lib', // Optional, can be used to avoid configuration overrides. This is recommended for libraries!
  translations: {
      'Hello ${0}': 'Bonjour ${0}',
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
  // date: {
  //     [...options] // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
  // },
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

module.exports = {
  locales: { fr, de },
  default: fr,
}