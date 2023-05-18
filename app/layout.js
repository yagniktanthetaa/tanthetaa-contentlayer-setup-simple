import "./globals.css";
import { Inter, Space_Mono } from "@next/font/google";
import { cx } from "class-variance-authority";
import Scrolltop from "./Scrolltop";

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
});

const spacemono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-mono",
});

export const metadata = {
  title: "Tan θ | Blockchain & Web3 Development Company",
  description:
    "Tan θ Software Studio is a Custom Blockchain Development Company. We are a team of 30+ young engineers to build MVPs for startups and Enterprise Solutions.",
  icons: {
    icon: "/public/tanthetaa_logo.png",
    shortcut: "/tanthetaa_logo.png",
    apple: "/tanthetaa_logo.png",
    other: {
      rel: "tanthetaa-touch-icon-precomposed",
      url: "/tanthetaa_logo.png",
    },
  },
  keywords: ["tan", "thetaa"],
  openGraph: {
    title: "Tan θ | Blockchain & Web3 Development Company",
    description:
      "Tan θ Software Studio is a Custom Blockchain Development Company. We are a team of 30+ young engineers to build MVPs for startups and Enterprise Solutions.",
    url: "https://tanthetaa.com",
    siteName: "tanthetaa.com",
    images: [
      {
        url: "/tanthetaa_logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "/tanthetaa_logo.png",
        width: 1800,
        height: 1600,
        alt: "Tan θ | Blockchain & Web3 Development Company",
      },
    ],
    locale: ["en-US", "en-in", "en-GB"],
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    yandex: "ad8b65cf4fe9db5c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, spacemono.variable, "font-inter")}>
        <main>
          {/* Body Start */}
          <Scrolltop>{children}</Scrolltop>
          {/* Body End */}
        </main>
      </body>
    </html>
  );
}
