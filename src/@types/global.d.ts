export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test'
}

export interface IProcessEnv  {
  BOT_TOKEN: string
  APPLICATION_ID: string
  ENVIRONMENT: Environment
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv { }
  }
}
