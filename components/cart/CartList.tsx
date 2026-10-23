import { auth } from "@/auth";
import { fetchCart } from "@/lib/data";
import CartItem from "./CartItem";
import { RiShoppingCartLine } from "react-icons/ri";

async function CartList() {
  const session = await auth();
  const cart = await fetchCart(session?.user?.id);

  if (!cart.length) {
    return (
      <div className="mx-auto mt-7 flex min-h-56 w-full items-center justify-center rounded-2xl border border-[#54341f]/10 bg-white p-5 sm:min-h-64 sm:w-[90%]">
        <div className="text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#342114]/15 p-3 text-2xl text-[#342114]">
            <RiShoppingCartLine />
          </span>
          <p className="mt-4 text-lg font-bold text-[#342114] sm:text-xl">
            سبد خرید شما خالیه!
          </p>
          <p className="mt-2 text-sm text-[#895939] sm:text-base">
            محصولی به سبد خریدت اضافه کن تا اینجا نمایش داده بشه.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 w-full min-w-0 rounded-2xl bg-white p-2 shadow-sm sm:mt-8 sm:w-[96%] sm:p-3 lg:w-[92%]">
      <div className="hidden grid-cols-[88px_minmax(0,1fr)_150px_210px] items-center gap-3 rounded-xl border border-[#342114]/20 bg-[#fcedda] px-4 py-4 text-sm font-bold text-[#342114] md:grid lg:grid-cols-[110px_minmax(0,1fr)_180px_240px] lg:gap-5 lg:px-5">
        <div className="text-center">عکس مبل</div>
        <div className="text-center">نام مبل</div>
        <div className="text-center">قیمت</div>
        <div className="text-center">تعداد و عملیات</div>
      </div>

      <ul className="mt-0 flex w-full min-w-0 flex-col divide-y divide-[#54341f]/15 md:mt-2 md:rounded-xl md:border md:border-[#54341f]/15">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} userId={session?.user?.id} />
        ))}
      </ul>
    </div>
  );
}

export default CartList;
