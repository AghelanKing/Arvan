import Link from "next/link";
import { Button } from "./button";
import { FaRegUser } from "react-icons/fa";
import { auth } from "@/auth";
import { IoIosArrowDown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

import { AiOutlinePoweroff } from "react-icons/ai";
import { TiHeartOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import SignOutButton from "./SignOutButton";
import { RiShoppingCartLine } from "react-icons/ri";
import { fetchUserName } from "@/lib/data";

async function LoginButton() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <Link href="/login" className="block shrink-0">
        <Button
          variant="outline"
          className="flex cursor-pointer w-full md:w-45 items-center gap-2 border-[#54341f]/30 px-3 py-4.5 text-[#342114] hover:bg-[#d9b07f] sm:px-4"
        >
          <FaRegUser className="size-4 shrink-0" />
          <span className="text-sm sm:text-base">ورود/ثبت نام</span>
        </Button>
      </Link>
    );
  }

  const user = await fetchUserName(session.user.id);
  const name = user?.[0]?.name;

  return <DropdownAuth name={name} />;
}

function DropdownAuth({ name }: { name?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            className="flex w-full md:w-43 justify-start cursor-pointer items-center gap-2 overflow-hidden border-[#54341f]/30 px-3 py-4.5 text-[#342114] hover:bg-[#d9b07f] focus:bg-[#f9f4ee] focus:ring-2 focus:ring-[#d9b07f]/60 sm:px-4"
          />
        }
      >
        <FaRegUser className="size-4 shrink-0" />

        <span className="truncate text-sm sm:text-base">
          {name || "حساب کاربری"}
        </span>

        <IoIosArrowDown className="hidden shrink-0 md:block" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        dir="rtl"
        className="w-52 border-[#54341f]/15 bg-[#f9f4ee] z-80"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-[#342114]">
            حساب من
          </DropdownMenuLabel>

          <DropdownMenuItem
            render={<Link href="/account" />}
            className="cursor-pointer font-semibold text-[#342114] hover:bg-[#f6cc99]"
          >
            <CgProfile />
            پروفایل
          </DropdownMenuItem>

          <DropdownMenuItem
            render={<Link href="/favorites" />}
            className="cursor-pointer font-semibold text-[#342114] hover:bg-[#f6cc99]"
          >
            <TiHeartOutline />
            علاقه‌مندی‌های من
          </DropdownMenuItem>

          <DropdownMenuItem
            render={<Link href="/cart" />}
            className="cursor-pointer font-semibold text-[#342114] hover:bg-[#f6cc99]"
          >
            <RiShoppingCartLine />
            سبد خرید من
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <SignOutButton>
          <DropdownMenuItem className="cursor-pointer font-semibold text-red-700 hover:bg-transparent">
            <AiOutlinePoweroff className="text-lg" />
            خروج
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LoginButton;
