import "./globals.css";
import Header from "@/components/layout/Header";
import Support from "@/views/Support";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="px-28">{children}</main>
        <Support />
      </body>
    </html>
  );
}
