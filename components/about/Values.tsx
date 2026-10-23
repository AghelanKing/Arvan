import { ImCheckmark2 } from "react-icons/im";
import { RiGeminiLine } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";

function Values() {
  return (
    <section className="mt-20">
      <div className="text-center">
        <p className="text-[#cca26e] font-semibold">ارزش‌های ما</p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#342114] mt-2">
          چیزی که برای ما اهمیت دارد
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="bg-white border border-[#342114]/10 rounded-2xl p-7 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#fcedda] flex items-center justify-center text-2xl">
            <RiGeminiLine />
          </div>

          <h3 className="text-xl font-bold text-[#342114] mt-5">طراحی</h3>

          <p className="text-[#342114]/65 leading-7 mt-3">
            طراحی زیبا و کاربردی برای ساختن فضایی که واقعاً دوستش دارید.
          </p>
        </div>

        <div className="bg-white border border-[#342114]/10 rounded-2xl p-7 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#fcedda] flex items-center justify-center text-2xl">
            <ImCheckmark2 />
          </div>

          <h3 className="text-xl font-bold text-[#342114] mt-5">کیفیت</h3>

          <p className="text-[#342114]/65 leading-7 mt-3">
            توجه به کیفیت محصولات و جزئیات برای تجربه‌ای مطمئن‌تر.
          </p>
        </div>

        <div className="bg-white border border-[#342114]/10 rounded-2xl p-7 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#fcedda] flex items-center justify-center text-2xl">
            <TiHeartOutline />
          </div>

          <h3 className="text-xl font-bold text-[#342114] mt-5">راحتی</h3>

          <p className="text-[#342114]/65 leading-7 mt-3">
            چون یک مبل زیبا زمانی ارزشمند است که راحتی را هم به همراه داشته
            باشد.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
