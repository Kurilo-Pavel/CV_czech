import type {Metadata} from "next";
import React from "react";
import "./globals.css";
import {NextIntlClientProvider, useMessages} from "next-intl";


export const metadata: Metadata = {
  title: "Kurilo Pavel",
  description: "My CV",
};

const RootLayout = ({children, params: {locale}}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = useMessages();
  return (
      <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
      </html>
  );
};
export default RootLayout;
