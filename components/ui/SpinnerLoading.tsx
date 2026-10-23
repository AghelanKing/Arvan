import { cn } from "cn";
import { LoaderIcon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-6 animate-spin", className)}
      {...props}
    />
  );
}

export function SpinnerLoading() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}
