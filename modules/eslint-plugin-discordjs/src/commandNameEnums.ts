import { Rule } from 'eslint'
import { Identifier, MemberExpression } from 'estree'

export function forceCommandNameEnums (context: Rule.RuleContext): Rule.RuleListener {
  return {
    CallExpression (node) {
      /**
       * ```ts
       * // Incorrect
       * import { SlashCommandBuilder } from '@discordjs/builders'
       *
       * const data = new SlashCommandBuilder().setName('ping')
       * ```
       *
       * ```ts
       * // Correct
       * import { SlashCommandBuilder } from '@discordjs/builders'
       *
       * export enum Command {
       *   PING = 'ping'
       * }
       *
       * const data = new SlashCommandBuilder().setName(Command.PING)
       * ```
       */
      if (
        // Call expression is being called with the first argument being a literal
        node.callee &&
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'CallExpression' &&
        node.callee.object.arguments?.length >= 1 &&
        node.callee.object.arguments[0].type === 'Literal' &&
        (node.callee.object.callee as MemberExpression)?.object?.type === 'NewExpression' &&
        ((node.callee.object.callee as MemberExpression)?.property as Identifier)?.name === 'setName'
      ) {
        context.report({
          node,
          message: "Don't use Literals as command names. Use an enum or constant variables instead."
        })
      }
    }
  }
}
