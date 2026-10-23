import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

type LogoProps = {
  fixed?: boolean;
} & Omit<ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">;

function Logo({ fixed, className, ...props }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/Logo.png"
        alt="Logo of TaskFlow"
        width={85}
        height={67}
        preload
        className={`${fixed ? "w-14" : ""} ${className ?? ""}`}
        {...props}
      />
    </Link>
  );
}

export default Logo;
