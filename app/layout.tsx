import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PedalFish — Run the business behind the bikes",
  description: "Service operations software for independent bike shops.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
