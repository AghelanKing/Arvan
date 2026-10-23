"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, usePresenceData } from "motion/react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { TextAnimate } from "@/components/magicui/text-animate";
import { TypingAnimation } from "../magicui/typing-animation";
import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export type SlideData = {
  title: string;
  desc: string;
  srcImg: string;
  link?: {
    label: string;
    href: string;
  };
};

const sliderData: SlideData[] = [
  {
    title: "خانه‌ای برای زندگی بهتر",
    desc: "مبلمانی با طراحی مدرن، راحتی بی‌نظیر و کیفیت ماندگار",
    srcImg: "/Sofas-img/sofa1.jpg",
    link: { label: "مشاهده محصولات", href: "/sofas" },
  },
  {
    title: "راحتی را احساس کنید",
    desc: "مبل‌هایی که زیبایی و آسایش را کنار هم قرار می‌دهند.",
    srcImg: "/Sofas-img/sofa2.jpg",
    link: { label: "مشاهده مبلمان", href: "/sofas" },
  },
  {
    title: "سادگی، زیبایی، ماندگاری",
    desc: "مبلمانی با طراحی مدرن، راحتی بی‌نظیر و کیفیت ماندگار",
    srcImg: "/Sofas-img/sofa3.jpg",
  },
  {
    title: "خانه‌تان را متفاوت کنید",
    desc: "انتخابی خاص برای ساختن فضایی گرم و دلنشین.",
    srcImg: "/Sofas-img/sofa4.jpg",
  },
  {
    title: "کیفیتی که ماندگار است",
    desc: "ساخته‌شده با دقت، انتخاب‌شده برای سال‌ها زندگی.",
    srcImg: "/Sofas-img/sofa5.jpg",
    link: { label: "درباره ما", href: "/about" },
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % sliderData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % sliderData.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <header className="relative h-[28rem] w-full overflow-hidden sm:h-[34rem] md:h-[38rem] lg:h-[40rem]">
      <AnimatePresence mode="wait" custom={direction}>
        <Slide key={index} slideData={sliderData[index]} />
      </AnimatePresence>

      <SliderButton
        dir="right"
        onClick={prev}
        className="right-2 sm:right-4 md:right-8"
      />

      <SliderButton
        dir="left"
        onClick={next}
        className="left-2 sm:left-4 md:left-8"
      />

      <div
        dir="ltr"
        className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-x-1 sm:bottom-8 md:bottom-12"
      >
        {sliderData.map((slide, i) => (
          <SliderDots
            key={slide.title}
            active={index === i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </header>
  );
}

function Slide({ slideData }: { slideData: SlideData }) {
  const direction = usePresenceData();

  return (
    <motion.div
      initial={{ x: direction * 100 + "%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction * -100 + "%", opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 grid h-full w-full grid-cols-1 grid-rows-1 overflow-hidden"
    >
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-0 h-full w-full overflow-hidden">
        <Image
          src={slideData.srcImg}
          alt={slideData.title}
          fill
          preload
          sizes="100vw"
          className="kenburns-top object-cover"
        />
      </div>

      <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-10 h-full w-full bg-black/40" />

      <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-20 flex h-full w-full flex-col items-center justify-center px-12 text-center text-white sm:px-16 md:px-20">
        <TextAnimate
          animation="blurInUp"
          by="word"
          className="mb-3 max-w-4xl text-2xl leading-relaxed font-bold sm:mb-4 sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl"
        >
          {slideData.title}
        </TextAnimate>

        <TypingAnimation
          as="p"
          typeSpeed={30}
          className="max-w-2xl text-sm leading-7 sm:text-base md:text-lg lg:text-xl"
          showCursor={false}
        >
          {slideData.desc}
        </TypingAnimation>

        {slideData.link && (
          <Link href={slideData.link.href} className="mt-4 sm:mt-5">
            <InteractiveHoverButton className="text-sm text-[#1C1917] sm:text-base">
              {slideData.link.label}
            </InteractiveHoverButton>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function SliderButton({
  dir,
  onClick,
  className,
}: {
  dir: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  const icon = dir === "left" ? <RxArrowLeft /> : <RxArrowRight />;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "اسلاید بعدی" : "اسلاید قبلی"}
      className={`absolute top-1/2 z-30 -translate-y-1/2 rounded-xl bg-[#cca26e] p-1.5 text-xl transition-colors hover:bg-[#b88d56] sm:rounded-2xl sm:p-2 sm:text-2xl md:text-3xl ${className}`}
    >
      {icon}
    </button>
  );
}

function SliderDots({
  active,
  onClick,
}: {
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={active ? "اسلاید فعلی" : "رفتن به اسلاید"}
      aria-current={active ? "true" : undefined}
      className="flex h-7 w-5 cursor-pointer items-center justify-center sm:w-6"
    >
      <span
        className={`h-2.5 rounded-full transition-all duration-300 sm:h-3 ${
          active
            ? "w-5 bg-[#cca26e] sm:w-6"
            : "w-2.5 bg-white/60 hover:bg-white sm:w-3"
        }`}
      />
    </button>
  );
}

export default Slider;
