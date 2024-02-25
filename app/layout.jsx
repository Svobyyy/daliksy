import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const druk = localFont({
  src: "./fonts/Druk-Wide-Bold.ttf",
  display: "swap",
  variable: "--font-druk",
  subsets: ["latin"],
});

const segoe = localFont({
  src: "./fonts/Druk-Wide-Bold.ttf",
  display: "swap",
  variable: "Segoe-UI.ttf",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${druk.variable} ${segoe.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
