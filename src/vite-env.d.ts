/// <reference types="./vite-env-override.d.ts" />

/* eslint-disable unicorn/prevent-abbreviations */
interface IAppEnvironment {
  readonly VITE_SERVER_URL: string
  readonly VITE_APP_URL: string
}

interface ImportMetaEnv extends IAppEnvironment {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module NodeJS {
  interface ProcessEnv extends IAppEnvironment {}
}
