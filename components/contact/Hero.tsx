import { cn } from "cn";
import { DotPattern } from "../ui/dot-pattern";

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#fcedda] p-8 md:p-14">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)] text-[#342114]/20",
        )}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="text-[#cca26e] font-semibold mb-3">تماس با آروان</p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#342114] leading-tight">
          با ما در ارتباط باشید
        </h1>

        <p className="mt-5 text-[#342114]/70 leading-8">
          اگر درباره محصولات، سفارش یا خدمات آروان سوالی دارید، خوشحال می‌شویم
          با ما در ارتباط باشید. تیم آروان آماده پاسخ‌گویی به شماست.
        </p>
      </div>
    </section>
  );
}

export default Hero;
