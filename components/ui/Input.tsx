import type { ComponentProps } from "react";

type Input = {
  className?: string;
  placeholder?: string;
  type?: string;
  name: string;
  id: string;
} & ComponentProps<"input">;

function Input({ className, placeholder, type, name, id, ...props }: Input) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`py-2 px-3 border focus:ring-5 focus:ring-[#cca26e]/70 border-[#342114] text-[#342114] font-semibold w-full rounded-lg ${className}`}
      name={name}
      id={id}
      {...props}
    />
  );
}

export default Input;
