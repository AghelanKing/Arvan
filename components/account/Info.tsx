import { auth } from "@/auth";
import { UserRound, Mail, Fingerprint } from "lucide-react";
import { InfoForm } from "./InfoForm";
import { fetchUserName } from "@/lib/data";
import { UpdatePassword } from "./UpdatePassword";

async function Info() {
  const session = await auth();

  const name = await fetchUserName(session?.user?.id);

  return (
    <div className="mx-auto mt-7 w-[90%] rounded-2xl border border-[#e8d8c7] bg-white p-5 shadow-sm sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#fcedda] text-[#54341f]">
            <UserRound className="size-7" />
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-[#342114] sm:text-3xl">
              {name?.[0]?.name ?? "کاربر آروان"}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#784d30]">
              <Mail className="size-4 shrink-0" />
              <span dir="ltr" className="break-all">
                {session?.user?.email ?? "ثبت نشده"}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-xs text-stone-500">
              <Fingerprint className="size-4 shrink-0" />
              <span>شناسه کاربر: {session?.user?.id}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <InfoForm userId={session?.user?.id} name={name?.[0]?.name} />
          <UpdatePassword userId={session?.user?.id} />
        </div>
      </div>
    </div>
  );
}

export default Info;
