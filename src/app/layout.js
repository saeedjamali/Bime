
import AppProvider from "@/components/context/AppProviders";
import "./globals.css";
import { authenticateMe } from "@/utils/authenticateMe";
import { cookies } from "next/headers";
import { verifyAccessToken, verifyRefreshToken } from "@/utils/auth";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "پورتال اداره انجمن و اولیا ",
  description: "Generated by Jam ",
};

export default async function RootLayout({ children }) {
  
  return (

    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" className="w-32 h-32" />
      </head>
      <body className="bg-white">
        <>
          <NextUIProvider>
            <AppProvider>{children}</AppProvider>
          </NextUIProvider>
        </>
      </body>
    </html>
  );
}
