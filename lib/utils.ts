export { cn } from "cn";

export function formatToman(tomanAmount: number | string) {
  return (
    new Intl.NumberFormat("fa-IR").format(tomanAmount as number) + " تومان"
  );
}

export function paginationGenerator(totalPage: number, currentPage: number) {
  if (totalPage <= 7) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPage - 1, totalPage];
  }

  if (currentPage >= totalPage - 2) {
    return [1, 2, "...", totalPage - 2, totalPage - 1, totalPage];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPage,
  ];
}
