import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Contexts
import UserContextProvider from "./contexts/user.context";
import CategoriesContextProvider from "./contexts/categories.context";
import CardContextProvider from "./contexts/cart.context";

// Components
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
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital@0;1&family=Raleway:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <UserContextProvider>
          <CategoriesContextProvider>
            <CardContextProvider>{children}</CardContextProvider>
          </CategoriesContextProvider>
        </UserContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
