import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SJA Card Record System",
  keywords: [
    "SJA",
    "St. Joseph's Academy",
    "Card Record System",
    "Student Records",
    "Grades Management",
    "School Administration",
    "Education",
  ],
  authors: [
    {
      name: "Russel Yasol",
    },
  ],
  description:
    "SJA Card Record System - Manage student records and grades efficiently.",
};

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        ${poppins.className}
        antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
