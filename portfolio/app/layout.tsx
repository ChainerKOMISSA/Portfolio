import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper"; // 👈 new import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Essi Chainer KOMISSA ZOTSU | Mon portfolio",
    description: "Mon portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProviderWrapper>
                {children}
                <Analytics />
                </ThemeProviderWrapper>
            </body>
        </html>
    );
}
