import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  title: "Nicholas - Personal Website",
  description: "Personal website and portfolio",
  icons: {
    icon: "/glitch-star.png",
    shortcut: "/glitch-star.png",
    apple: "/glitch-star.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
