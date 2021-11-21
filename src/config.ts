import { config } from 'dotenv'

config()

const throwIfNot = function<T, K extends keyof T> (obj: Partial<T>, prop: K, msg?: string): T[K] {
  if (obj[prop] === undefined || obj[prop] === null) {
    throw new Error(msg || `You need to setup the following environment variable: '${prop}'\nRefer to '.env.example'`)
  } else {
    return obj[prop] as T[K]
  }
}

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test'
}

export interface IProcessEnv {
  BOT_TOKEN: string
  APPLICATION_ID: string
  /** @default 'development' */
  ENVIRONMENT: Environment
}

declare global {
  export namespace NodeJS {
    export interface ProcessEnv extends IProcessEnv { }
  }
}

const REQUIRED_VARIABLES: (keyof IProcessEnv)[] = [
  'APPLICATION_ID',
  'BOT_TOKEN'
]

if (!process.env.ENVIRONMENT) {
  process.env.ENVIRONMENT = Environment.DEVELOPMENT
}

// Validate that we have our expected ENV variables
REQUIRED_VARIABLES.forEach(v => {
  throwIfNot(process.env, v)
})
