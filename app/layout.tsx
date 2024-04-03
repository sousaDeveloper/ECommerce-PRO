"use client";

import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Utilities
import { store, persistor } from "./store/store";
// @ts-ignore
import { PersistGate } from "redux-persist/integration/react";

// Components
import { Toaster } from "./components/ui/sonner";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon_ns_by_nuhamaulana_da5acc2-300w.png" type="image/x-icon" />
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <title>Next Store</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
