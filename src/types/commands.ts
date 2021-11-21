import { BaseApplicationCommandOptionsData, CacheType, Interaction as DiscordInteraction, MessageComponentInteraction } from 'discord.js'

export enum Command {
  ADD_CONTENT_CREATOR_ROLE = 'add_content_creator_role'
}

export type CommandOptionsData = BaseApplicationCommandOptionsData & {
  name: Command
}

export type Interaction = DiscordInteraction<CacheType> & {
  commandName?: Command
}

export type CommandInteraction = MessageComponentInteraction & {
  commandName?: Command
}