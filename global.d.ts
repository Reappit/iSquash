import type messages from './messages/en.json';

const locales = ['en', 'ru'] as const;

declare module 'next-intl' {
  interface AppConfig {
    // ...
    Locale: (typeof locales)[number];
    Messages: typeof messages;
  }
}
