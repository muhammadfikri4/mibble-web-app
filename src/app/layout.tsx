import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "../../public/Logo_Color.png";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mibble",
  description:
    "Sosial media web Mibble, talk about the hot news of the moment!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
