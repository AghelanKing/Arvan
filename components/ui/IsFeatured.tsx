import { SofaCard } from "@/lib/difintions";
import { Highlighter } from "./highlighter";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import SofasCard from "./SofasCard";

const buttonClass =
  "rtl:rotate-180 size-8 min-[390px]:size-9 sm:size-10 border-2 border-[#C08552] bg-transparent text-[#C08552] hover:bg-[#C08552] hover:text-[#F7F3EE] cursor-pointer";

function IsFeatured({ isFeatured }: { isFeatured: SofaCard[] }) {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-linear-to-b from-[oklch(0.97_0.01_80)] from-20% to-[#eabd87] px-3 py-8 min-[390px]:px-4 sm:px-6 sm:py-10 lg:px-8">
      <h2 className="mt-2 text-2xl font-bold text-[#342114] min-[390px]:text-3xl lg:text-4xl">
        <Highlighter action="underline" color="#cca26e" isView>
          مبلمان منتخب
        </Highlighter>
      </h2>

      <div className="relative mt-7 px-8 min-[390px]:px-9 sm:mt-9 sm:px-12 lg:px-14">
        <Carousel
          dir="rtl"
          opts={{
            align: "start",
            direction: "rtl",
            loop: isFeatured.length > 4,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {isFeatured?.map((item) => (
              <CarouselItem
                key={item.id}
                className="min-w-0 basis-full pl-3 min-[480px]:basis-1/2 sm:pl-4 lg:basis-1/3 xl:basis-1/4"
              >
                <SofasCard href={item.id} item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            aria-label="محصول بعدی"
            className={`-left-7 right-auto min-[390px]:-left-8 ${buttonClass}`}
          />

          <CarouselPrevious
            aria-label="محصول قبلی"
            className={`-right-7 left-auto min-[390px]:-right-8 ${buttonClass}`}
          />
        </Carousel>
      </div>
    </section>
  );
}

export default IsFeatured;
