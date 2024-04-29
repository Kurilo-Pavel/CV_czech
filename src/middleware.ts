import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix,
  pathnames
});

// export default createMiddleware({
//   locales: ['en', 'de'],
//   defaultLocale: 'en'
// });

export const config = {
  matcher: ['/', '/(ch|en|de)/:path*']
};