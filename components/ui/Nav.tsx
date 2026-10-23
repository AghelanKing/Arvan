"use client";

import Link from "next/link";
import Logo from "./Logo";
import { TiHeartOutline } from "react-icons/ti";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavMobile from "./NavMobile";

export type List = {
  label: string;
  href: string;
  isList?: boolean;
};

export const NavLinks = [
  { label: "خانه", href: "/" },
  { label: "مبلمان", href: "/sofas", isList: true },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];

export const NavList = [
  { label: "راحتی", href: "/sofas?category=مبل+راحتی" },
  { label: "مدرن", href: "/sofas?category=مبل+مدرن" },
  { label: "کلاسیک", href: "/sofas?category=مبل+کلاسیک" },
  { label: "ال‌شکل", href: "/sofas?category=مبل+ال‌شکل" },
  { label: "تخت‌خواب‌شو", href: "/sofas?category=مبل+تخت‌خواب‌شو" },
  { label: "تک‌نفره", href: "/sofas?category=مبل+تک‌نفره" },
];

function Nav({ children }: { children: React.ReactNode }) {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(function () {
    const handleFixed = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleFixed);
    return () => window.removeEventListener("scroll", handleFixed);
  }, []);

  return (
    <>
      <nav
        className={`hidden md:flex py-3 border-b border-[#8c6a43] ${isFixed ? "fixed top-3 bg-[#eabd87] w-[90%] rounded-full z-50 mr-19 py-1!" : ""}`}
      >
        <div className="flex items-center justify-between w-[85%] mx-auto">
          <div>
            <Logo fixed={isFixed} />
          </div>
          <div>
            <ul className="flex items-center gap-x-4">
              {NavLinks.map((link) => (
                <li
                  key={link.label}
                  className="font-semibold py-2 px-4 rounded-xl hover:bg-[#cca26e] text-[#1C1917] nav-li"
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
          <div className="flex gap-x-3 items-center">
            <Link href="/favorites">
              <Button variant="destructive" className=" py-4.5  cursor-pointer">
                <TiHeartOutline />
              </Button>
            </Link>
            {children}
          </div>
        </div>
      </nav>

      <nav
        className={`flex md:hidden py-3 border-b border-[#8c6a43] ${isFixed ? "fixed top-3 bg-[#eabd87] w-[90%] rounded-full z-50 mr-5 py-1!" : ""}`}
      >
        <div className="flex items-center justify-between w-[85%] mx-auto">
          <div>
            <NavMobile>{children}</NavMobile>
          </div>
          <div>
            <Logo fixed={isFixed} />
          </div>
        </div>
      </nav>
    </>
  );
}

export function MenuList({ list }: { list: List[] }) {
  return (
    <ul className="absolute invisible z-50 opacity-0 mt-3 -mr-5 bg-eabd87 rounded-xl border border-[#342114] bg-[#eabd87] overflow-hidden">
      {list.map((item) => (
        <Link href={item.href} key={item.label}>
          <li className="py-3 pr-3 pl-7 border-b border-[#342114] hover:bg-[#342114] hover:text-[#eabd87]">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Nav;
