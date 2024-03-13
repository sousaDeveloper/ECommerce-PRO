import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserContextProvider from "./contexts/user.context";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="shortcut icon" href="/favicon_ns_by_nuhamaulana_da5acc2-300w.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Raleway:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <UserContextProvider>{children}</UserContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
