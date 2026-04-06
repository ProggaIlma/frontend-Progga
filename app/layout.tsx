import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PPA — Master Focus & Get More Done in Less Time",
  description:
    "A step-by-step system to eliminate procrastination, train your brain for deep work, and boost productivity effortlessly.",
  openGraph: {
    title: "PPA — The Deep Work Blueprint",
    description: "Join 5K students mastering deep focus and peak productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* SF Pro Display is a system font on Apple; the CSS @font-face in globals.css handles fallbacks */}
      </head>
      <body className={`${dmSans.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
