import { Suspense } from "react";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import Thumb from "@/components/Thumb";
import { formatSeason, getIngredient, parseMonth, todayInKorea } from "@/lib/ingredients";
import { getAllRecipes, getRecipe } from "@/lib/recipes";
import { TONE } from "@/lib/tone";

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ id: r.id }));
}

// 레시피 상세: 식재료 정보 + 레시피 내용(사진 포함)
export default function RecipePage(props: PageProps<"/recipes/[id]">) {
  return (
    <main className="mx-auto w-full max-w-[430px] flex-1 bg-canvas pb-10">
      <Suspense fallback={<p className="p-6 text-ink-soft">불러오는 중이에요…</p>}>
        <RecipeContent {...props} />
      </Suspense>
    </main>
  );
}

async function RecipeContent({ params, searchParams }: PageProps<"/recipes/[id]">) {
  const { id } = await params;
  const query = await searchParams;
  const recipe = getRecipe(id);
  if (!recipe) notFound();
  const ingredient = getIngredient(recipe.ingredientId);
  if (!ingredient) notFound();

  const now = todayInKorea();
  const month = parseMonth(query.month) ?? now.month;
  const inSeason = ingredient.months.includes(now.month);

  return (
    <>
      {/* 상단 레시피 사진 */}
      <div className={`relative flex h-64 items-center justify-center ${TONE.yellow}`}>
        <div className="absolute top-5 left-5 z-10">
          <BackLink href={`/ingredients/${ingredient.id}?month=${month}`} />
        </div>
        <Thumb src={recipe.image} alt={recipe.name} size={208} className="rounded-full text-6xl" />
      </div>

      <article className="-mt-6 rounded-t-[28px] bg-canvas px-5 pt-6">
        <h1 className="text-2xl font-extrabold">{recipe.name}</h1>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-2xl bg-today px-4 py-2 text-2xl font-extrabold text-white">
            {recipe.kcal}
            <span className="ml-0.5 text-sm font-semibold">kcal</span>
          </span>
          <span className="text-xs text-ink-soft">{recipe.serving} 기준</span>
        </div>

        {/* 연결 식재료 정보 */}
        <div className={`mt-5 flex items-center gap-3 rounded-2xl p-4 ${TONE[ingredient.tone]}`}>
          <Thumb src={ingredient.image} alt={ingredient.name} size={48} className="rounded-full text-lg" />
          <div>
            <p className="text-sm font-bold">
              {ingredient.name}
              {inSeason && " · 지금이 제철이에요"}
            </p>
            <p className="text-xs text-ink-soft">제철 {formatSeason(ingredient.months)}</p>
          </div>
        </div>

        <section className="mt-6" aria-labelledby="items-title">
          <h2 id="items-title" className="mb-2 text-base font-bold">
            재료
          </h2>
          <ul className="divide-y divide-canvas rounded-2xl bg-surface px-4 text-sm">
            {recipe.items.map((item) => (
              <li key={item.name} className="flex justify-between py-3">
                <span>{item.name}</span>
                <span className="text-ink-soft">{item.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6" aria-labelledby="steps-title">
          <h2 id="steps-title" className="mb-2 text-base font-bold">
            만드는 법
          </h2>
          <ol className="flex flex-col gap-3">
            {recipe.steps.map((step, i) => (
              <li key={i} className="overflow-hidden rounded-2xl bg-surface">
                <div className={`flex h-40 items-center justify-center ${TONE.sand}`}>
                  <Thumb src={step.image} alt={`${recipe.name} ${i + 1}단계`} size={96} className="rounded-2xl text-3xl" />
                </div>
                <p className="flex items-start gap-3 p-4 text-sm">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </>
  );
}
