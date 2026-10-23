import { cn } from "cn";
import { DotPattern } from "../ui/dot-pattern";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#fcedda] mt-6 p-8 md:p-14">
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

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#cca26e] font-semibold mb-3">درباره آروان</p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#342114] leading-tight">
            خانه‌ای زیبا،
            <br />
            با انتخابی که دوستش دارید.
          </h1>

          <p className="mt-6 text-[#342114]/70 leading-8 max-w-xl">
            آروان با هدف ساختن تجربه‌ای متفاوت برای انتخاب مبلمان شکل گرفت؛ جایی
            که طراحی زیبا، کیفیت و راحتی در کنار هم قرار می‌گیرند تا انتخابی
            مناسب برای خانه شما داشته باشید.
          </p>

          <Link href="/sofas">
            <Button className="mt-7 px-7 h-12 bg-[#342114] hover:bg-[#4a2d1a] cursor-pointer">
              مشاهده محصولات
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/Sofas-img/sofa1.jpg"
              alt="مبلمان آروان"
              width={800}
              height={600}
              className="w-full h-100 md:h-120 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
