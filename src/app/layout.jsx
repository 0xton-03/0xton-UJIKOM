import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/componens/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OXTON.PAGE",
  description: "don't care about fucking love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="min-h-screen">
        {children}
        </div>
        <Footer className="mt-50"></Footer>
      </body>
    </html>
  );
}
