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
  src: "./fonts/Segoe-UI.ttf",
  display: "swap",
  variable: "--font-segoe",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dupscaled",
  description:
    "crafts standout brands through social mastery, expert editing, and stunning design. We've sparked over a billion views for global stars. Join us to elevate your online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${druk.variable} ${segoe.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
