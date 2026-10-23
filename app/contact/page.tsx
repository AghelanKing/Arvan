import Hero from "@/components/contact/Hero";
import CTAContact from "@/components/contact/CTAContact";
import ContactInfo from "@/components/contact/ContactInfo";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
};

export default function ContactPage() {
  return (
    <main className="w-full mt-6 p-7">
      <Hero />
      <Suspense fallback={<p>در حال بارگذاری</p>}>
        <ContactInfo />
      </Suspense>
      <CTAContact />
    </main>
  );
}
