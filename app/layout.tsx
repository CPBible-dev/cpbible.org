import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://cpbible.org"),

  title: {
    default: "CPBible | The Bible You Pray, Declare, and Live",
    template: "%s | CPBible",
  },

  description:
    "Read the Word. Receive Revelation. Declare the Word. Live the Word. CPBible transforms Scripture into prayer, confession, and daily spiritual growth.",

  keywords: [
    "Bible App",
    "Christian App",
    "Prayer App",
    "Confessional Prayer Bible",
    "Bible Study",
    "Bible Reading",
    "Prayer Wall",
    "Discipleship",
    "Christian Growth",
    "Scripture Transformation",
  ],

  openGraph: {
    title: "CPBible | The Bible You Pray, Declare, and Live",
    description:
      "A Scripture Transformation Platform helping believers read, pray, declare, and live God's Word.",
    url: "https://cpbible.org",
    siteName: "CPBible",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CPBible",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CPBible",
    description:
      "The Bible You Pray, Declare, and Live.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}