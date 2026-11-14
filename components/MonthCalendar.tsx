type Props = {
  year: number;
  month: number;
  today: number | null;
};

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

// 선택한 달의 작은 달력. 오늘 날짜는 주황 원으로 표시한다.
export default function MonthCalendar({ year, month, today }: Props) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: lastDate }, (_, i) => i + 1),
  ];

  return (
    <div className="w-44 shrink-0 rounded-2xl bg-surface p-3 text-ink" aria-label={`${month}월 달력`}>
      <div className="mb-1 flex items-center justify-between text-[10px] font-bold">
        <span>{month}월</span>
        <span className="text-today">{month}월 제철</span>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[9px]">
        {WEEK.map((w) => (
          <span key={w} className="text-ink-soft">
            {w}
          </span>
        ))}
        {cells.map((d, i) =>
          d === null ? (
            <span key={`blank-${i}`} />
          ) : (
            <span
              key={d}
              className={
                d === today
                  ? "mx-auto flex size-4 items-center justify-center rounded-full bg-today font-bold text-white"
                  : "bg-season py-px"
              }
            >
              {d}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
