import { SlashCommandBuilder } from '@discordjs/builders'

import { Command, CommandInteraction } from '../types/commands'

module.exports = {
  data: new SlashCommandBuilder()
    .setName(Command.ADD_CONTENT_CREATOR_ROLE)
    .setDescription('Sets up content creator role'),
  async execute (interaction: CommandInteraction) {
    await interaction.reply('Hey!')
  }
}
