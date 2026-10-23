import Link from "next/link";
import { MagicCard } from "../magicui/magic-card";
import { ScaleFadeIn } from "./ScaleFade";
import Image from "next/image";
import { formatToman } from "@/lib/utils";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { SofaCard } from "@/lib/difintions";

export default function SofasCard({
  item,
  children,
  href,
}: {
  item: SofaCard;
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <ScaleFadeIn>
      <MagicCard
        gradientFrom="#8B6F47"
        gradientTo="#C08552"
        gradientColor="#e8d2b6"
        gradientOpacity={0.6}
        className="border-2 p-2 rounded-xl relative overflow-visible"
      >
        <Link href={href}>
          <Image
            src={item.image}
            alt={`عکس مبل برای ${item.name}`}
            width={400}
            height={250}
            className="w-full h-60 object-cover rounded-xl"
          />
          <h4 className="text-3xl text-[#714a28] mt-3 font-bold">
            {item.name}
          </h4>
          <h5 className="mt-3 font-medium text-[#342114]">
            {formatToman(item.price)}
          </h5>
          <p className="text-[#cca26e] mt-3 font-medium">{item.category}</p>
        </Link>
        <div className="flex gap-x-2 items-center justify-between">
          <Link href={href}>
            <InteractiveHoverButton className="text-[#342114] mt-3 text-sm!">
              مشاهده محصول
            </InteractiveHoverButton>
          </Link>
          {children}
        </div>
      </MagicCard>
    </ScaleFadeIn>
  );
}
