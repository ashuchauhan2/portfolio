import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#f8f9f5" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://www.ashuchauhan.com"),
  title: {
    default: "Ashu Chauhan — Software, Systems & Applied AI",
    template: "%s | Ashu Chauhan",
  },
  description:
    "Software developer and incoming Georgia Tech OMSCS student. Practical software experience with a growing focus on autonomous systems, robotics, and applied AI.",
  openGraph: {
    title: "Ashu Chauhan — Software, Systems & Applied AI",
    description:
      "Useful software. Real constraints. A deliberate direction toward autonomous systems, robotics, and applied AI.",
    url: "https://www.ashuchauhan.com",
    siteName: "Ashu Chauhan",
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
