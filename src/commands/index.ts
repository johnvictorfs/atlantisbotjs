import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

import { Command, CommandOptionsData } from '../types/commands'

const commands: CommandOptionsData[] = [
  {
    name: Command.ADD_CONTENT_CREATOR_ROLE,
    description: 'Adds the passed role as ',
    autocomplete: true
  }
]

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN)

export const setupCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    // TODO: Hardcoded testing Guild ID
    await rest.put(
      Routes.applicationGuildCommands(process.env.APPLICATION_ID, '268897682066505738'),
      { body: commands }
    )

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}
