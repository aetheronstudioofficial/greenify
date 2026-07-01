import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

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
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#0d1c12] pb-16 md:pb-0">
        {children}
        <MobileNav />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Safeguard pointer capture to prevent Uncaught NotFoundError (e.g. unmounted elements)
              if (typeof Element !== 'undefined') {
                if (Element.prototype.releasePointerCapture) {
                  const originalRelease = Element.prototype.releasePointerCapture;
                  Element.prototype.releasePointerCapture = function (pointerId) {
                    try {
                      originalRelease.call(this, pointerId);
                    } catch (e) {}
                  };
                }
                if (Element.prototype.setPointerCapture) {
                  const originalSet = Element.prototype.setPointerCapture;
                  Element.prototype.setPointerCapture = function (pointerId) {
                    try {
                      originalSet.call(this, pointerId);
                    } catch (e) {}
                  };
                }
              }

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
