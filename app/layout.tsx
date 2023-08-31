"use client";
import "./globals.css";
import type { Metadata } from "next";
import { useState } from "react";
import { Inter } from "next/font/google";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Lara Mo</title>
        <link rel="icon" href="icon.png"></link>
      </head>
      <body className={inter.className}>
        <Home setDarkMode={setDarkMode} darkMode={darkMode} />
      </body>
    </html>
  );
}
