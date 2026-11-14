import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import Thumb from "@/components/Thumb";
import { getAllIngredients, getIngredient, parseMonth, todayInKorea, withRo } from "@/lib/ingredients";
import { getRecipesByIngredient } from "@/lib/recipes";
import { TONE } from "@/lib/tone";

export function generateStaticParams() {
  return getAllIngredients().map((i) => ({ id: i.id }));
}

// 식재료 상세: 이 식재료로 만드는 레시피 목록과 칼로리
export default function IngredientPage(props: PageProps<"/ingredients/[id]">) {
  return (
    <main className="mx-auto w-full max-w-[430px] flex-1 bg-canvas pb-10">
      <Suspense fallback={<p className="p-6 text-ink-soft">불러오는 중이에요…</p>}>
        <IngredientContent {...props} />
      </Suspense>
    </main>
  );
}

async function IngredientContent({ params, searchParams }: PageProps<"/ingredients/[id]">) {
  const { id } = await params;
  const query = await searchParams;
  const ingredient = getIngredient(id);
  if (!ingredient) notFound();

  const now = todayInKorea();
  const month = parseMonth(query.month) ?? now.month;
  const recipes = getRecipesByIngredient(ingredient.id);
  const maxKcal = Math.max(...recipes.map((r) => r.kcal), 1);
  const inSeason = ingredient.months.includes(now.month);

  return (
    <>
      <header className={`rounded-b-[32px] px-5 pt-5 pb-6 ${TONE[ingredient.tone]}`}>
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0">
            <BackLink href={`/?month=${month}`} />
          </div>
          <p className="text-xs font-semibold text-ink-soft">{month}월 제철</p>
        </div>
        <div className="mt-4 flex items-center gap-5">
          <Thumb src={ingredient.image} alt={ingredient.name} size={112} className="rounded-full text-4xl" />
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-5xl font-extrabold">{ingredient.name}</h1>
            {inSeason && (
              <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                <span className="size-1.5 rounded-full bg-today" aria-hidden />
                지금이 제철
              </span>
            )}
          </div>
        </div>
        {/* 1~12월 중 제철인 달을 진하게 표시 */}
        <ol className="mt-5 grid grid-cols-12 gap-0.5 rounded-full bg-surface/70 p-1 text-center text-[11px]" aria-label="제철 달">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
            const season = ingredient.months.includes(m);
            return (
              <li
                key={m}
                aria-current={m === now.month ? "date" : undefined}
                className={`rounded-full py-1 ${season ? "bg-ink font-bold" : "text-ink-soft"} ${
                  m === now.month ? "text-today" : season ? "text-white" : ""
                }`}
              >
                {m}
              </li>
            );
          })}
        </ol>
      </header>

      <section className="px-5 pt-6" aria-labelledby="recipes-title">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="recipes-title" className="text-lg font-bold">
            {withRo(ingredient.name)} 이런 걸 만들 수 있어요
          </h2>
          <span className="text-xs text-ink-soft">{recipes.length}가지</span>
        </div>
        {recipes.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {recipes.map((r, idx) => (
              <li key={r.id} className="relative">
                {idx === 0 && (
                  <span className="absolute -top-2 right-3 z-10 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-white">
                    가장 가벼워요
                  </span>
                )}
                <Link
                  href={`/recipes/${r.id}?month=${month}`}
                  className="flex min-h-11 items-center gap-4 rounded-3xl bg-surface p-3"
                >
                  <Thumb src={r.image} alt={r.name} size={80} className={`rounded-2xl text-2xl ${TONE[ingredient.tone]}`} />
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-sm font-bold">{r.name}</span>
                    <span className="text-2xl font-extrabold text-today">
                      {r.kcal}
                      <span className="ml-0.5 text-xs font-semibold">kcal</span>
                    </span>
                    {/* 칼로리 비교 막대 (가장 높은 레시피 기준) */}
                    <span className="h-1.5 w-full rounded-full bg-tone-sand" aria-hidden>
                      <span className="block h-full rounded-full bg-today" style={{ width: `${(r.kcal / maxKcal) * 100}%` }} />
                    </span>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full bg-canvas text-lg" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl bg-surface p-6 text-center text-sm text-ink-soft">레시피는 아직 준비 중이에요</p>
        )}
      </section>
    </>
  );
}
