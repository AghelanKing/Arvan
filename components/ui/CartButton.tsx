import Link from "next/link";
import { Button } from "./button";
import { RiShoppingCartLine } from "react-icons/ri";
import { cartCount } from "@/lib/data";
import { auth } from "@/auth";

async function CartButton() {
  const session = await auth();
  const countSofa = await cartCount(session?.user?.id);
  return (
    <>
      <Link href="/cart" className="hidden md:flex">
        <Button
          variant="secondary"
          className=" py-4.5 relative cursor-pointer text-[#342114] border border-[#cca26e] hover:bg-[#cca26e] hover:text-[#f9f4ee]"
        >
          <span className="absolute -top-1.5 -right-1.5 px-1.5 pt-0.5 text-xs text-[#f9f4ee] rounded-full bg-[#8b5937]">
            {countSofa}
          </span>
          <RiShoppingCartLine />
        </Button>
      </Link>
      <Link href="/cart" className="flex md:hidden w-full">
        <Button
          variant="secondary"
          className=" py-4.5 w-full! flex justify-start relative cursor-pointer text-[#342114] border border-[#cca26e] hover:bg-[#cca26e] hover:text-[#f9f4ee]"
        >
          <RiShoppingCartLine />
          سبد خرید
        </Button>
      </Link>
    </>
  );
}

export default CartButton;
