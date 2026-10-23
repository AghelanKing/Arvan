import { auth } from "@/auth";
import Buttons from "./Buttons";

async function DeleteButtons() {
  const session = await auth();
  return (
    <div className="mx-auto mt-7 w-[90%] rounded-xl border border-[#e8d8c7] bg-white shadow-sm p-1">
      <Buttons userId={session?.user?.id} />
    </div>
  );
}

export default DeleteButtons;
