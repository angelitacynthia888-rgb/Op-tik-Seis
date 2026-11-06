import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optik Seis | See Better. Live Brighter.",
  description: "Discover Optik Seis: trusted eye care, curated eyewear, and a legacy of vision since 1927.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
