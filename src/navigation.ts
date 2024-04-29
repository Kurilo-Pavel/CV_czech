import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

export const locales = ["en", "ch", "de"];
export const localePrefix = "always";

export const pathnames = {
  "/": {
    en: "/",
    ch: "/",
    de: "/"
  },

  // '/admin': {
  //   en: '/admin',
  //   ru: '/admin'
  // },
}

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});