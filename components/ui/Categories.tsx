import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import { BlurFade } from "../magicui/blur-fade";
import { TextAnimate } from "../magicui/text-animate";
import { ShineBorder } from "../magicui/shine-border";
import { Highlighter } from "./highlighter";

export type category = {
  srcImg: string;
  label: string;
  link: string;
  delay: number;
};

export const categoriesData: category[] = [
  {
    srcImg: "/Sofas-img/ComfortableSofa.jpg",
    label: "مبل راحتی",
    link: "/sofas?category=مبل+راحتی",
    delay: 0.25,
  },
  {
    srcImg: "/Sofas-img/ModernSofa.jpg",
    label: "مبل مدرن",
    link: "/sofas?category=مبل+مدرن",
    delay: 0.45,
  },
  {
    srcImg: "/Sofas-img/clasicSofa.jpg",
    label: "مبل کلاسیک",
    link: "/sofas?category=مبل+کلاسیک",
    delay: 0.55,
  },
  {
    srcImg: "/Sofas-img/LSofa.jpg",
    label: "مبل ال‌شکل",
    link: "/sofas?category=مبل+ال‌شکل",
    delay: 0.65,
  },
  {
    srcImg: "/Sofas-img/bedSofa.jpg",
    label: "مبل تخت‌خواب‌شو",
    link: "/sofas?category=مبل+تخت‌خواب‌شو",
    delay: 0.25,
  },
  {
    srcImg: "/Sofas-img/singleSofa.jpg",
    label: "مبل تک‌نفره",
    link: "/sofas?category=مبل+تک‌نفره",
    delay: 0.35,
  },
];

export default function Categories() {
  return (
    <section className="w-full min-w-0 px-3 py-6 min-[390px]:px-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <h2 className="relative mt-2 text-2xl font-bold text-[#342114] min-[390px]:text-3xl lg:text-4xl">
        <Highlighter action="box" color="#cca26e" isView>
          دسته‌بندی مبلمان
        </Highlighter>
      </h2>

      <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 min-[600px]:grid-cols-2 sm:mt-6 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {categoriesData.map((category) => (
          <CategoriesCard key={category.label} category={category} />
        ))}
      </div>
    </section>
  );
}

function CategoriesCard({ category }: { category: category }) {
  return (
    <BlurFade
      delay={category.delay}
      direction="up"
      inView
      className="category-card h-full min-w-0"
    >
      <Link
        href={category.link}
        className="group relative block h-full min-w-0 overflow-hidden rounded-2xl border border-[#54341f]/20 bg-white p-2 transition-shadow duration-300 hover:shadow-lg"
      >
        <ShineBorder
          shineColor={["oklch(0.55 0.07 70)", "#ffffff", "oklch(0.65 0.09 70)"]}
          borderWidth={1}
          duration={8}
        />

        <Image
          src={category.srcImg}
          alt={category.label}
          width={600}
          height={400}
          sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 36px), 33vw"
          className="h-44 w-full rounded-xl object-cover min-[390px]:h-52 sm:h-56 lg:h-64"
        />

        <div className="flex min-w-0 items-center justify-between gap-2 px-2 py-3 min-[390px]:gap-3 min-[390px]:py-4 sm:px-3">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="min-w-0 text-base font-bold text-[#342114] min-[390px]:text-lg sm:text-xl lg:text-2xl"
          >
            {category.label}
          </TextAnimate>

          <span className="shrink-0 text-sm text-[#8b623e] transition-transform duration-300 group-hover:-translate-x-1 sm:text-base">
            <FaChevronLeft />
          </span>
        </div>
      </Link>
    </BlurFade>
  );
}
