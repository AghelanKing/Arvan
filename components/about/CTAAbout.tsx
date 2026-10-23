import Link from "next/link";
import { DotPattern } from "../ui/dot-pattern";
import { Button } from "../ui/button";

function CTAAbout() {
  return (
    <section className="relative overflow-hidden mt-20 mb-10 rounded-3xl bg-[#342114] p-10 md:p-14 text-center">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="text-white/10"
      />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          آماده‌ای فضای خانه‌ات رو تغییر بدی؟
        </h2>

        <p className="text-white/65 mt-4">
          مجموعه مبلمان آروان را ببین و محصول مناسب خودت را پیدا کن.
        </p>

        <Link href="/sofas">
          <Button className="mt-7 bg-[#cca26e] hover:bg-[#b78d5c] text-[#342114] px-8 h-12 cursor-pointer">
            مشاهده مجموعه مبلمان
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CTAAbout;
