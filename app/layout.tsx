import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const display = Manrope({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

const title = "Nephtally Moshabeshe · AI Implementation & Integration Engineer";
const description =
  "AI implementation and integration engineer. I build AI assistants, automations and integrations, then support them in production, from root cause to the lasting fix.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
