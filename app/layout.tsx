import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Btc Open Issues',
    description: 'Bitcoin Open Source Projects Issues',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
