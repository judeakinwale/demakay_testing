import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import PageLayout from "@/template/RootLayout";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Demakay Inc.",
  description:
    "Helping individuals and businesses file taxes accurately and efficiently",
  keywords: ["Accounting", "Tax Services", "Demakay Inc.", "Tax Filing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased font-[var(--font-montserrat)] scroll-smooth`}
      >
        <PageLayout>
          <Providers>{children}</Providers>
        </PageLayout>
      </body>
    </html>
  );
}
