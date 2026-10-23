"use client";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import { ScaleFadeIn } from "./ScaleFade";
import { DotPattern } from "./dot-pattern";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

export default function Banner() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // پایین به بالا
  const firstY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // بالا به پایین
  const secondY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-150 w-full flex-col items-center justify-center overflow-hidden bg-[#eabd87] px-4 py-12 min-[390px]:px-5 sm:min-h-[650px] sm:px-7 sm:py-16 lg:min-h-[700px] lg:px-10"
    >
      {/* Pattern اول */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: firstY }}
      >
        <DotPattern
          className="h-full w-full text-[#b67d57e7]"
          height={20}
          x={1000}
        />
      </motion.div>

      {/* Pattern دوم */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: secondY }}
      >
        <DotPattern
          className="h-full w-full text-[#b67d57e7]"
          height={20}
          y={200}
          x={-900}
        />
      </motion.div>

      {/* عنوان و لوگو */}
      <div className="banner relative z-10 mt-2 flex items-center justify-center gap-1 text-[#7c5032e2] min-[390px]:gap-2 sm:mt-4 sm:gap-3">
        <h1 className="-ml-2 rotate-15 text-4xl font-bold min-[390px]:text-5xl sm:-ml-5 sm:text-6xl lg:-ml-8 lg:text-7xl">
          ARVAN
        </h1>

        <Logo className="w-20 rotate-[-15deg] min-[390px]:w-24 sm:w-28 lg:w-35" />
      </div>

      {/* متن و مدل سه‌بعدی */}
      <div className="relative z-10 mt-8 flex w-full max-w-6xl flex-col items-center gap-6 min-[390px]:mt-10 sm:mt-12 sm:gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        {/* توضیحات */}
        <div className="w-full min-w-0 text-center lg:w-[55%] lg:text-right">
          <p className="text-base font-semibold leading-8 text-[#342114] min-[390px]:text-[17px] sm:text-lg sm:leading-9">
            در ARVAN، مبلمان فقط یک وسیله برای خانه نیست؛ بخشی از سبک زندگی
            شماست. ما مجموعه‌ای از مبلمان مدرن، راحت و چشم‌نواز را برای
            سلیقه‌های مختلف فراهم کرده‌ایم. از طراحی‌های ساده و مینیمال تا
            مدل‌های کلاسیک و خاص، هر محصول با دقت انتخاب شده است. هدف ما این است
            که با ترکیب زیبایی، کیفیت و راحتی، فضای خانه‌تان را دلنشین‌تر کنیم.
            ARVAN؛ جایی برای انتخاب مبلمانی که با خانه‌ی شما معنا پیدا می‌کند.
          </p>
        </div>

        {/* مدل سه‌بعدی */}
        <div className="w-full min-w-0 max-w-[380px] sm:max-w-[460px] lg:w-[45%] lg:max-w-none">
          <ScaleFadeIn>
            <ModelViewer />
          </ScaleFadeIn>
        </div>
      </div>
    </section>
  );
}
