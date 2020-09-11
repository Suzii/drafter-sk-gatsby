type TrueOrFalse = 'true' | 'false';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly GATSBY_ENABLED_FEATURES: string;
      readonly GATSBY_KONTENT_PROJECT_ID: string;
      readonly GATSBY_KONTENT_LANGUAGE_CODENAMES: string;
      readonly GATSBY_IS_PREVIEW : TrueOrFalse;
      readonly KONTENT_PREVIEW_API_KEY: string;
      readonly NODE_ENV: 'development' | 'production' | 'preview';
    }
  }
}

export {}
