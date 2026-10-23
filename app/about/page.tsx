import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import CTAAbout from "@/components/about/CTAAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
};

export default function Page() {
  return (
    <main className="w-full p-7">
      <Hero />
      <Story />
      <Values />
      <CTAAbout />
    </main>
  );
}
