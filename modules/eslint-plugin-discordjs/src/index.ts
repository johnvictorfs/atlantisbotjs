import { forceCommandNameEnums } from './commandNameEnums'

module.exports = {
  rules: {
    'discordjs-force-command-name-enums': {
      meta: {
        type: 'problem'
      },
      create: forceCommandNameEnums
    }
  }
}
