import Link from "next/link";
import MonthCalendar from "@/components/MonthCalendar";

type Props = {
  year: number;
  month: number;
  // 오늘 날짜 (선택한 달이 이번 달일 때만 표시)
  today: number | null;
};

const prevMonth = (m: number) => (m === 1 ? 12 : m - 1);
const nextMonth = (m: number) => (m === 12 ? 1 : m + 1);

// 메인 상단: 선택한 월 + 이전/다음 달 버튼 + 달력
export default function MonthHeader({ year, month, today }: Props) {
  return (
    <header className="rounded-b-[32px] bg-brand px-5 pt-6 pb-6 text-brand-ink">
      <p className="text-sm font-semibold opacity-80">제철밥상</p>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold leading-none tracking-tight">
            {month}
            <span className="text-3xl">월</span>
          </h1>
          <p className="mt-3 text-sm leading-snug opacity-90">
            이번 달엔
            <br />
            이게 제철이에요
          </p>
          <nav aria-label="월 바꾸기" className="mt-4 flex gap-2">
            <Link
              href={`/?month=${prevMonth(month)}`}
              className="flex min-h-11 items-center rounded-full bg-white/15 px-4 text-sm font-semibold"
            >
              ‹ {prevMonth(month)}월
            </Link>
            <Link
              href={`/?month=${nextMonth(month)}`}
              className="flex min-h-11 items-center rounded-full bg-white/15 px-4 text-sm font-semibold"
            >
              {nextMonth(month)}월 ›
            </Link>
          </nav>
        </div>
        <MonthCalendar year={year} month={month} today={today} />
      </div>
    </header>
  );
}
