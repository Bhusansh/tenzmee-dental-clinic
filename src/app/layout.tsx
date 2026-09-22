import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanzmee Dental Clinic | Advanced Dental Care",
  description:
    "Tanzmee Dental Clinic offers comprehensive dental care for the whole family — general dentistry, implants, braces, whitening, and more. Book your appointment today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
