import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCharacter from "./components/FloatingCharacter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uno Dev",
  description: "Uno Dev's Portfolio",
  icons: {
    icon: "/boy5.png",
    apple: "/boy5.png",
    shortcut: "/boy5.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        {children}
        <FloatingCharacter />
      </body>
    </html>
  );
}
