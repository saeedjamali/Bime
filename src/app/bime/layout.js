import AppProvider from "@/components/context/AppProviders";

import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "سرویس بیمه عمر پرسنل شاغل و بازنشسته ",
  description: "Generated by Jam ",
};

export default async function RootLayout({ children }) {
  return (
    <>
      <NextUIProvider>
        <AppProvider>{children}</AppProvider>
      </NextUIProvider>
    </>
  );
}
