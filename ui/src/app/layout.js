import Bar from "./bar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alumni",
  description: "Review site for alumnis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Bar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
