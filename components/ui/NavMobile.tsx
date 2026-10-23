import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import { MenuList, NavLinks, NavList } from "./Nav";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";
import { ReactNode } from "react";

function NavMobile({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant={"ghost"}>
            <CiMenuFries className="text-xl" />
          </Button>
        }
      />
      <SheetContent dir="rtl">
        <SheetHeader>
          <SheetTitle>منوی آروان</SheetTitle>
        </SheetHeader>
        <div className="p-2">
          <ul className="flex flex-col items-center gap-y-2 w-full">
            {NavLinks.map((link) => (
              <li
                key={link.label}
                className="font-semibold py-2 px-4 rounded-xl hover:bg-[#cca26e] text-[#1C1917] nav-li w-full"
              >
                <Link href={link.href} className="nav-item">
                  <div className="flex gap-x-1.5 items-center">
                    {link.label}
                    {link.isList && <IoIosArrowDown className="iconNav" />}
                  </div>
                </Link>
                {link.isList && <MenuList list={NavList} />}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 p-2">
          <Link href="/favorites" className="w-full">
            <Button
              variant="destructive"
              className=" py-4.5  cursor-pointer w-full flex justify-start"
            >
              <TiHeartOutline />
              علاقه مندی ها
            </Button>
          </Link>
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavMobile;
