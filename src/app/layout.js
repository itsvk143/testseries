import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// katex global CSS must live here (layout.js) — NOT inside client components
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TestSeries - Master Your Exams",
  description: "Premium Test Series for NEET, JEE Mains, and JEE Advanced. Practice with mock tests and previous year papers.",
};

import AuthProvider from "../components/AuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
