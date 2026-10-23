import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Information() {
  return (
    <div className="rounded-2xl border border-[#342114]/10 bg-white p-7">
      <p className="text-[#cca26e] font-semibold">راه‌های ارتباطی</p>

      <h2 className="text-3xl font-bold text-[#342114] mt-2">
        چطور می‌توانیم کمکتان کنیم؟
      </h2>

      <div className="mt-8 space-y-5">
        {/* Phone */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcedda]">
          <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#342114]">
            <FiPhone className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-[#342114]/60">تلفن تماس</p>

            <p className="font-semibold text-[#342114] mt-1">۰۲۱-۱۲۳۴۵۶۷۸</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcedda]">
          <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#342114]">
            <FiMail className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-[#342114]/60">ایمیل</p>

            <p className="font-semibold text-[#342114] mt-1">info@arvan.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcedda]">
          <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#342114]">
            <FiMapPin className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-[#342114]/60">آدرس</p>

            <p className="font-semibold text-[#342114] mt-1">
              تهران، خیابان مثال، پلاک ۱۲
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fcedda]">
          <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center text-[#342114]">
            <FiClock className="text-xl" />
          </div>

          <div>
            <p className="text-sm text-[#342114]/60">ساعات پاسخ‌گویی</p>

            <p className="font-semibold text-[#342114] mt-1">
              شنبه تا پنجشنبه، ۹ تا ۱۸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
