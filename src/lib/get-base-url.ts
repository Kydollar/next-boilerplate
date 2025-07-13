import { trimTrailingSlash } from './utils';

const DEV_URL = 'http://localhost:3000';

export default function getBaseUrl(): string {
  const isDev = process.env.NODE_ENV === 'development';

  const baseUrl = isDev ? DEV_URL : process.env.NEXT_PUBLIC_URL;

  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_URL is not defined in environment variables.');
  }

  return trimTrailingSlash(baseUrl);
}
