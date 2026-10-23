"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  TbAward,
  TbArmchair,
  TbLayersIntersect,
  TbShieldCheck,
} from "react-icons/tb";
import type { IconType } from "react-icons";

import { ShineBorder } from "../magicui/shine-border";

type Why = {
  label: string;
  desc: string;
  icon: IconType;
};

const whyData: Why[] = [
  {
    label: "کیفیت",
    desc: "محصولات با تمرکز بر کیفیت ساخت و انتخاب متریال مناسب.",
    icon: TbAward,
  },
  {
    label: "راحتی",
    desc: "مبلمانی که علاوه بر ظاهر، برای استفاده روزمره هم راحت باشه.",
    icon: TbArmchair,
  },
  {
    label: "تنوع",
    desc: "از مدل‌های مدرن و مینیمال تا سبک‌های کلاسیک و خاص.",
    icon: TbLayersIntersect,
  },
  {
    label: "انتخابی مطمئن",
    desc: "تلاش برای ارائه اطلاعات کامل محصول تا انتخاب راحت‌تر بشه.",
    icon: TbShieldCheck,
  },
];

function WhyFeature() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center overflow-hidden bg-linear-to-b from-[#eabd87] from-30% to-[oklch(0.97_0.01_80)] px-4 py-12 min-[390px]:px-5 sm:px-7 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* عنوان */}
      <motion.h2
        style={{ y }}
        className="mb-8 text-center text-4xl font-extrabold text-[#342114e4] min-[390px]:text-5xl sm:mb-12 sm:text-6xl lg:mb-14 lg:text-7xl"
      >
        چرا آروان؟
      </motion.h2>

      {/* کارت‌ها */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {whyData.map((item, index) => (
          <WhyCard key={item.label} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function WhyCard({ item, index }: { item: Why; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
      className="relative flex h-full min-w-0 flex-col items-center overflow-hidden rounded-2xl border border-[#54341f]/15 bg-[#f9f4ee] px-5 py-7 text-center text-[#342114] shadow-sm transition-shadow duration-300 hover:shadow-lg min-[390px]:px-6 sm:py-8 lg:px-5"
    >
      <ShineBorder
        shineColor={["oklch(0.55 0.07 70)", "#ffffff", "oklch(0.65 0.09 70)"]}
        borderWidth={1}
        duration={8}
      />

      {/* پس‌زمینه‌ی ظریف آیکون */}
      <div className="mb-4 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#eabd87]/35 sm:size-[72px]">
        <Icon className="size-9 text-[#8b623e] sm:size-10" />
      </div>

      <h3 className="text-xl font-bold min-[390px]:text-2xl">{item.label}</h3>

      <p className="mt-3 text-sm leading-7 text-[#5f4938] min-[390px]:text-base sm:mt-4">
        {item.desc}
      </p>
    </motion.article>
  );
}

export default WhyFeature;
