import { Client, Intents } from 'discord.js'

import { Command, Interaction } from '../types/commands'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand()) return

  switch (interaction.commandName) {
    case Command.ADD_CONTENT_CREATOR_ROLE: {
      await interaction.reply(`Hello ${interaction.command}`)
    }
  }
})

client.login('token')
