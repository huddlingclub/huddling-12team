import { Suspense } from "react";
import { connection } from "next/server";
import { MonthHeader } from "@/components/MonthHeader";
import { IngredientCard } from "@/components/IngredientCard";
import { EmptyState } from "@/components/EmptyState";
import { getIngredientsByMonth } from "@/lib/data";

export default function Home(props: PageProps<"/">) {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeContent searchParams={props.searchParams} />
    </Suspense>
  );
}

async function HomeContent({
  searchParams,
}: Pick<PageProps<"/">, "searchParams">) {
  const query = await searchParams;

  // 선택한 월이 없으면 오늘 날짜 기준으로 기본값을 정해요.
  await connection();
  const currentMonth = new Date().getMonth() + 1;

  const monthParam = Array.isArray(query.month) ? query.month[0] : query.month;
  const parsedMonth = Number(monthParam);
  const month =
    Number.isInteger(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12
      ? parsedMonth
      : currentMonth;

  const ingredients = getIngredientsByMonth(month);

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-surface-muted pb-10">
      <MonthHeader month={month} />

      <main className="flex flex-1 flex-col gap-4 px-5 pt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-ink">{month}월 제철 식재료</h2>
          <span className="text-sm text-ink-muted">{ingredients.length}가지</span>
        </div>

        {ingredients.length === 0 ? (
          <EmptyState message="이 달 식재료는 아직 준비 중이에요" />
        ) : (
          <div className="grid grid-cols-3 gap-2.5">
            {ingredients.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} month={month} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function HomeSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-surface-muted">
      <div className="h-96 animate-pulse" />
    </div>
  );
}
