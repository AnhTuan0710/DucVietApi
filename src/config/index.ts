import * as config from 'config';

export const APP_URL = {
  ADMIN_URL: config.get<string>('app.url.admin'),
}

export const MAIL_CONFIG = {
  HOST: config.get<string>('mail_config.host'),
  PORT: config.get<string>('mail_config.port'),
  USER: config.get<string>('mail_config.user'),
  PASS: config.get<string>('mail_config.pass'),
  FROM: config.get<string>('mail_config.from'),
  SECURE: config.get<boolean>('mail_config.secure'),
};