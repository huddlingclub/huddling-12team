import Link from "next/link";
import { COPY } from "@/lib/copy";

type MonthHeaderProps = {
  month: number;
};

export function MonthHeader({ month }: MonthHeaderProps) {
  const prevMonth = month === 1 ? 12 : month - 1;
  const nextMonth = month === 12 ? 1 : month + 1;

  return (
    <header className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <p className="font-bold text-ink">제철밥상</p>
        <div className="flex items-center gap-2">
          <Link
            href={`/?month=${prevMonth}`}
            aria-label={`${prevMonth}월로 이동`}
            className="flex size-11 items-center justify-center rounded-full border border-line text-ink"
          >
            ‹
          </Link>
          <Link
            href={`/?month=${nextMonth}`}
            aria-label={`${nextMonth}월로 이동`}
            className="flex size-11 items-center justify-center rounded-full border border-line text-ink"
          >
            ›
          </Link>
        </div>
      </div>

      <p className="mt-4 text-7xl font-extrabold leading-none text-accent">{month}</p>
      <h1 className="mt-3 text-2xl font-bold text-ink">{COPY.mainTitle}</h1>
    </header>
  );
}
