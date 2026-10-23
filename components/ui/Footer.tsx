import Link from "next/link";
import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandWhatsapp,
} from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-[#342114] text-white rounded-t-[40px] px-7 pt-16 pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold tracking-wide text-[#eabd87]">
              ARVAN
            </h2>

            <p className="mt-5 max-w-xs leading-8 text-white/60">
              مبلمانی برای خانه‌ای که داستان خودش را دارد.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">دسترسی سریع</h3>

            <ul className="mt-6 space-y-4 text-white/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#eabd87]"
                >
                  خانه
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="transition-colors hover:text-[#eabd87]"
                >
                  محصولات
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[#eabd87]"
                >
                  درباره ما
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#eabd87]"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">ارتباط با ما</h3>

            <ul className="mt-6 space-y-5 text-white/60">
              <li className="flex items-center gap-3">
                <TbPhone
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#eabd87]"
                />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>

              <li className="flex items-center gap-3">
                <TbMail
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#eabd87]"
                />
                <span>info@arvan.ir</span>
              </li>

              <li className="flex items-start gap-3">
                <TbMapPin
                  size={21}
                  strokeWidth={1.5}
                  className="text-[#eabd87] shrink-0"
                />
                <span>تهران، خیابان ...</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold">ما را دنبال کنید</h3>

            <p className="mt-5 leading-7 text-white/60">
              برای دیدن جدیدترین محصولات و اخبار ARVAN همراه ما باشید.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#eabd87] hover:bg-[#eabd87] hover:text-[#342114]"
              >
                <TbBrandInstagram size={20} strokeWidth={1.5} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#eabd87] hover:bg-[#eabd87] hover:text-[#342114]"
              >
                <TbBrandTelegram size={20} strokeWidth={1.5} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#eabd87] hover:bg-[#eabd87] hover:text-[#342114]"
              >
                <TbBrandWhatsapp size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-white/40">
          <p>© 2026 ARVAN — تمامی حقوق محفوظ است.</p>

          <p>طراحی شده با ❤️ برای خانه‌ای بهتر</p>
        </div>
      </div>
    </footer>
  );
}
