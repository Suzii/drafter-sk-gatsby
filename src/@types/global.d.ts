type TrueOrFalse = 'true' | 'false';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly GATSBY_ENABLED_FEATURES: string;
      readonly KONTENT_PROJECT_ID: string;
      readonly KONTENT_LANGUAGE_CODENAMES: string;
      readonly KONTENT_PREVIEW_ENABLED: TrueOrFalse;
      readonly KONTENT_PREVIEW_API_KEY: string;
      readonly NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
