import { auth } from "@/auth";
import { sumPriceCart } from "@/lib/data";
import { formatToman } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { CheckCircle2 } from "lucide-react";

async function TotalCartPrice() {
  const session = await auth();
  const sumPrice = await sumPriceCart(session?.user?.id);

  if (sumPrice === "0") return null;

  return (
    <div className="mx-auto mt-5 w-full min-w-0 rounded-2xl border border-[#54341f]/10 bg-white p-4 shadow-sm sm:mt-7 sm:w-[96%] sm:p-5 md:w-[85%] lg:w-[75%] xl:w-[65%]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <h3 className="text-base font-bold text-[#342114] sm:text-lg lg:text-xl">
          مجموع سبد خرید شما:
        </h3>

        <p className="break-words text-xl font-bold text-[#5d3a22] sm:text-2xl lg:text-3xl">
          {formatToman(sumPrice)}
        </p>
      </div>

      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button
              size="lg"
              className="mt-5 w-full cursor-pointer py-5! text-base sm:mt-6 sm:text-lg"
            />
          }
        >
          پرداخت
        </AlertDialogTrigger>

        <AlertDialogContent
          dir="rtl"
          className="w-[calc(100%-2rem)] rounded-2xl sm:max-w-lg"
        >
          <AlertDialogHeader className="items-center text-center">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-9 shrink-0 text-green-600 sm:size-12" />

              <AlertDialogTitle className="text-lg text-[#342114] sm:text-xl">
                ممنون از همراهی شما!
              </AlertDialogTitle>
            </div>

            <AlertDialogDescription className="text-right text-sm leading-7 sm:text-base">
              این فروشگاه یک پروژه تمرینی و آموزشی است. در حال حاضر امکان پرداخت
              واقعی وجود ندارد و فرایند خرید در همین مرحله به پایان می‌رسد. از
              اینکه پروژه آروان را بررسی کردید، سپاسگزاریم.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction className="w-full cursor-pointer bg-[#54341f] hover:bg-[#704a30]">
              متوجه شدم
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default TotalCartPrice;
