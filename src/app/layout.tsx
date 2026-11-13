import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

const roboto = Roboto({
    variable: "---font-roboto",
    subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
    title: "1/2 мечты",
    description: "Каменный ковер",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${roboto.variable}  h-full antialiased`}>
            <body className="min-h-full flex flex-col items-center">{children}</body>
        </html>
    );
}
