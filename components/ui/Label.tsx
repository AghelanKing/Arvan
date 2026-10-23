import type { ComponentProps } from "react";

type Label = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"label">;

function Label({ htmlFor, children, className, ...props }: Label) {
  return (
    <label
      className={`text-lg text-[#342114] font-semibold ${className}`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
