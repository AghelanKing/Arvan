import { auth } from "@/auth";
import { fetchFavorites } from "@/lib/data";
import FavoritesItem from "./FavoritesItem";
import { TiHeartOutline } from "react-icons/ti";

async function FavoritesList() {
  const session = await auth();
  const favorites = await fetchFavorites(session?.user?.id);

  if (!favorites.length) {
    return (
      <div className="mx-auto mt-7 flex min-h-64 w-full max-w-5xl flex-col items-center justify-center rounded-2xl border border-[#54341f]/15 bg-white px-4 py-10 text-center sm:min-h-80">
        <span
          className="text-4xl bg-red-100 text-red-700 p-2 rounded-full"
          aria-hidden="true"
        >
          <TiHeartOutline />
        </span>

        <h2 className="mt-4 text-lg font-bold text-[#342114] sm:text-xl">
          هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید
        </h2>

        <p className="mt-2 max-w-md text-sm leading-7 text-[#342114]/65">
          هر مبلمانی را که دوست دارید، با زدن دکمه قلب به این بخش اضافه کنید تا
          بعداً راحت‌تر پیدایش کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-7 w-full min-w-0 max-w-7xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-[#342114] sm:text-xl">
          مبلمان موردعلاقه شما
        </h2>

        <span className="shrink-0 rounded-full bg-[#fcedda] px-3 py-1.5 text-xs font-medium text-[#54341f] sm:text-sm">
          {favorites.length} محصول
        </span>
      </div>

      <ul className="grid min-w-0 grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {favorites.map((favorite) => (
          <FavoritesItem
            key={favorite.id}
            favorite={favorite}
            userId={session?.user?.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
