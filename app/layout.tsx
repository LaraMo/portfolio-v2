"use client";
import { ReactNode, useState } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/molecules/Nav";

const poppins = Poppins({ weight: "400", subsets: ["devanagari"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Lara Mo</title>
        <link rel="icon" href="icon.png"></link>
      </head>
      <body className={poppins.className}>
        <div className={darkMode ? "dark" : ""}>
          <div className="bg-slate-50 text-gray-600 dark:bg-dark-primary dark:text-dark-font">
            <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
