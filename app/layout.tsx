import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import LoginButton from "@/components/ui/LoginButton";
import { Suspense } from "react";
import CartButton from "@/components/ui/CartButton";

import { Toaster } from "react-hot-toast";

export const vasir = Vazirmatn({
  subsets: ["arabic"],
});

// export const estedad = Estedad({
//   subsets: ["arabic"],
// });

export const metadata: Metadata = {
  title: {
    template: "%s | مبلمان آروان",
    default: "مبلمان آروان",
  },
  description:
    "فروشگاه مبلمان آروان؛ ترکیبی از زیبایی، راحتی و طراحی مدرن برای خانه شما.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        dir="rtl"
        className={`min-h-screen flex flex-col ${vasir.className}`}
      >
        <Nav>
          <Suspense>
            <CartButton />
          </Suspense>
          <Suspense>
            <LoginButton />
          </Suspense>
        </Nav>

        <main className="flex-1">
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 5000,
              style: {
                direction: "rtl",
                fontFamily: "Vazirmatn, sans-serif",
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "#895939",
                  secondary: "#fff",
                },
              },
              error: {
                duration: 4000,
              },
            }}
          />
        </main>

        <Footer />
      </body>
    </html>
  );
}
