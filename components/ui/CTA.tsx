import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { DotPattern } from "./dot-pattern";
import { cn } from "@/lib/utils";

function CTA() {
  return (
    <section className="relative w-full px-4 py-12 min-[390px]:px-5 sm:px-7 sm:py-16 lg:py-24">
      <div className="relative mx-auto flex min-h-[260px] w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#342114]/20 px-4 py-10 text-center min-[390px]:min-h-[280px] min-[390px]:px-5 sm:min-h-[320px] sm:px-8 sm:py-12 lg:min-h-[360px]">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "pointer-events-none text-[#342114] mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />

        <h2 className="relative z-10 max-w-full text-2xl font-bold leading-relaxed text-[#342114] min-[390px]:text-3xl sm:text-4xl lg:text-5xl">
          خانه‌ات، داستان توست.
        </h2>

        <p className="relative z-10 mt-3 max-w-full text-sm leading-7 text-[#342114]/70 min-[390px]:text-base sm:mt-4 sm:text-lg">
          با ARVAN این داستان را زیباتر بساز.
        </p>

        <div className="relative z-10 mt-4 min-[390px]:mt-5">
          <Link href="/products">
            <InteractiveHoverButton className="text-sm text-[#342114] min-[390px]:text-base">
              مشاهده مبلمان
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
