import { MagicCard } from "@/components/magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "@/components/login/SignUpForm";
import Logo from "@/components/ui/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
};

export default function Page() {
  return (
    <div className="flex w-full min-w-0 flex-col items-center justify-center px-4 py-7 sm:px-6 sm:py-10">
      <Logo />

      <Card className="mt-5 w-full max-w-md border-none p-0 shadow-none sm:mt-7">
        <MagicCard
          gradientFrom="#8B6F47"
          gradientTo="#C08552"
          gradientColor="#e8d2b6"
          gradientOpacity={0.3}
          className="rounded-xl p-0"
        >
          <CardHeader className="border-border border-b p-4 [.border-b]:pb-4 sm:p-5">
            <CardTitle className="text-lg text-[#342114] sm:text-xl">
              ثبت‌نام
            </CardTitle>

            <CardDescription className="text-sm leading-6 sm:text-base">
              برای ورود ابتدا باید ثبت‌نام کنید.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <SignUpForm />
          </CardContent>
        </MagicCard>
      </Card>
    </div>
  );
}
