import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Nuclus",
  description: "The AI Orchestration Platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><Providers><body>{children}</body></Providers></html>;
}