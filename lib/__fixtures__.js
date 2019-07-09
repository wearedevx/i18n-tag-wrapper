const fr = {
  locales: 'fr-FR',
  // group: 'my-lib', // Optional, can be used to avoid configuration overrides. This is recommended for libraries!
  translations: {
      "Hello ${0}": "Bonjour ${0}",
      "You have ${0}": "Vous avez ${0}",
      "no notification": "aucune notification",
      "${0} notification": "${0} notification",
      "${0} notifications": "${0} notifications",
      "no horse": "aucun cheval",
      "${0} horse": "${0} cheval",
      "${0} horses": "${0} chevaux",
  },
  number: {
      currency: "EUR" // Intl NumberFormat options as described here: https://goo.gl/pDwbG2
  },
  // date: {
  //     [...options] // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
  // }
}

module.exports = {
  locales: { fr },
  default: fr,
  plurals: {
    "notification": {
      none: "no notification",
      many: "notifications"
    },
    "horse": {
      none: "no horse",
      many: "horses"
    }
  }
}