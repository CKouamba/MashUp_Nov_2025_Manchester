/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANTHROPIC_BASE_URL: string;
  readonly VITE_ANTHROPIC_AUTH_TOKEN: string;
  readonly VITE_ANTHROPIC_MODEL: string;
  readonly VITE_ANTHROPIC_DEFAULT_SONNET_MODEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
