import { Suspense } from "react";
import IngredientCard from "@/components/IngredientCard";
import MonthHeader from "@/components/MonthHeader";
import { getIngredientsByMonth, parseMonth, todayInKorea } from "@/lib/ingredients";

// 메인 화면: 선택한 달(기본값: 이번 달)의 제철 식재료
export default function Home({ searchParams }: PageProps<"/">) {
  return (
    <main className="mx-auto w-full max-w-[430px] flex-1 bg-canvas pb-10">
      <Suspense fallback={<p className="p-6 text-ink-soft">불러오는 중이에요…</p>}>
        <MainContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function MainContent({ searchParams }: Pick<PageProps<"/">, "searchParams">) {
  const params = await searchParams;
  const now = todayInKorea();
  const month = parseMonth(params.month) ?? now.month;
  const items = getIngredientsByMonth(month);

  return (
    <>
      <MonthHeader year={now.year} month={month} today={month === now.month ? now.day : null} />
      <section className="px-5 pt-6" aria-labelledby="season-title">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 id="season-title" className="text-lg font-bold">
            {month}월 제철 식재료
          </h2>
          <span className="text-xs text-ink-soft">{items.length}가지</span>
        </div>
        {items.length > 0 ? (
          <ul className="grid grid-cols-3 gap-3">
            {items.map((item) => (
              <li key={item.id}>
                <IngredientCard ingredient={item} month={month} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl bg-surface p-6 text-center text-sm text-ink-soft">
            {month}월 식재료는 아직 준비 중이에요
          </p>
        )}
      </section>
    </>
  );
}
