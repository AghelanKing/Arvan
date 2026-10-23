import Link from "next/link";
import { DotPattern } from "../ui/dot-pattern";
import { Button } from "../ui/button";

function CTAContact() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#342114] mt-10 mb-10 p-10 text-center">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="text-white/10"
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white">
          هنوز محصول مورد نظرتان را پیدا نکرده‌اید؟
        </h2>

        <p className="text-white/60 mt-3">
          مجموعه مبلمان آروان را ببینید و انتخاب خودتان را پیدا کنید.
        </p>

        <Link href="/sofas">
          <Button className="mt-6 bg-[#cca26e] hover:bg-[#b78d5c] text-[#342114] px-8 h-12 cursor-pointer">
            مشاهده محصولات
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CTAContact;
