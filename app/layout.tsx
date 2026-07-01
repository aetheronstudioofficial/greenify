import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greenify - Order Fresh Groceries & Healthy Food",
  description: "Order fresh groceries online and enjoy a healthy life with local organic produce delivered straight to your door.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Greenify",
  },
};

export const viewport = {
  themeColor: "#415e47",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased bg-[#faf7f2] text-[#0d1c12]`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#0d1c12]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable gesture zoom (Safari)
              document.addEventListener('gesturestart', function (e) {
                e.preventDefault();
              });
              // Disable multi-touch zoom (Safari/Chrome/Firefox on iOS/Android)
              document.addEventListener('touchstart', function (e) {
                if (e.touches.length > 1) {
                  e.preventDefault();
                }
              }, { passive: false });
              document.addEventListener('touchmove', function (e) {
                if (e.touches.length > 1) {
                  e.preventDefault();
                }
              }, { passive: false });
            `,
          }}
        />
      </body>
    </html>
  );
}
