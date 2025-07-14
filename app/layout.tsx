import type { Metadata } from "next";
import { Mona_Sans, } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Prepare for Interviews",
  description: "An AI-powered platform to help you prepare for interviews with personalized questions and feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}


        <Toaster/>
      </body>
    </html>
  );
}
