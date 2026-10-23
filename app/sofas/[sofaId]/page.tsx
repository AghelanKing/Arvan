import Sofa from "@/components/sofas/Sofa";
import SofaSkeleton from "@/components/sofas/SofaSkeleton";
import { Suspense } from "react";

import type { Metadata } from "next";
import { fetchSofa } from "@/lib/data";

type Params = {
  params: Promise<{ sofaId: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { sofaId } = await params;
  const sofa = await fetchSofa(sofaId);

  return {
    title: `${sofa?.[0].name}`,
    description: `خرید ${sofa?.[0].name} از فروشگاه مبلمان آروان؛ ترکیبی از زیبایی، راحتی و کیفیت.`,
  };
}

export default async function Page({ params }: Params) {
  return (
    <section className="p-3 md:p-10">
      <Suspense fallback={<SofaSkeleton />}>
        <Sofa params={params} />
      </Suspense>
    </section>
  );
}
