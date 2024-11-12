import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revolutionize Hiring | Smart Recruitment Platform",
  description: "Transform your hiring process with AI-powered candidate review, custom assessments, and seamless onboarding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Make sure all dynamic or client-specific data is handled in the body or inside components, not in the layout itself
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
