import { Footer, Navbar } from "@/components/organisms";
import React from "react";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
