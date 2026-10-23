import Banner from "@/components/ui/Banner";
import Categories from "@/components/ui/Categories";
import CTA from "@/components/ui/CTA";
import Slider from "@/components/ui/Header";
import IsFeatured from "@/components/ui/IsFeatured";
import WhyFeature from "@/components/ui/WhyFeature";
import { fatchIsFeaturedSofas } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  const isFeatureProducts = await fatchIsFeaturedSofas();

  return (
    <div>
      <Slider />
      <Categories />
      <Suspense fallback={<p>Loading</p>}>
        <IsFeatured isFeatured={isFeatureProducts} />
      </Suspense>
      <Banner />
      <WhyFeature />
      <CTA />
    </div>
  );
}
