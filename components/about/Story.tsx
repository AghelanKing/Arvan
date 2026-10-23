import Image from "next/image";

function Story() {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
      <div>
        <p className="text-[#cca26e] font-semibold">داستان ما</p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#342114] mt-2">
          آروان فقط یک فروشگاه نیست
        </h2>

        <p className="mt-6 text-[#342114]/70 leading-8">
          ما باور داریم مبلمان فقط بخشی از دکوراسیون خانه نیست؛ بلکه بخشی از
          لحظه‌هایی است که در خانه تجربه می‌کنیم.
        </p>

        <p className="mt-4 text-[#342114]/70 leading-8">
          به همین دلیل در آروان تلاش می‌کنیم محصولاتی را ارائه کنیم که ترکیبی از
          زیبایی، راحتی و کیفیت باشند و بتوانند سال‌ها بخشی از فضای زندگی شما
          باقی بمانند.
        </p>

        <p className="mt-4 text-[#342114]/70 leading-8">
          هدف ما این است که انتخاب مبلمان برای شما ساده‌تر، مطمئن‌تر و
          لذت‌بخش‌تر باشد.
        </p>
      </div>

      <div className="rounded-3xl bg-[#fcedda] p-3">
        <Image
          src="/Sofas-img/sofa2.jpg"
          alt="طراحی مبلمان آروان"
          width={800}
          height={600}
          className="w-full h-100 object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Story;
