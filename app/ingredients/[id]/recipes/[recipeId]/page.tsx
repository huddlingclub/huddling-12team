import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { KcalPill } from "@/components/KcalPill";
import { IngredientInfoCallout } from "@/components/IngredientInfoCallout";
import { RecipeStepList } from "@/components/RecipeStepList";
import { OtherRecipeRow } from "@/components/OtherRecipeRow";
import { cardColorAt } from "@/lib/colors";
import { getIngredientById, getRecipeById, getRecipesByIngredientId } from "@/lib/data";
import Link from "next/link";

export default function RecipeDetailPage(
  props: PageProps<"/ingredients/[id]/recipes/[recipeId]">,
) {
  return (
    <Suspense fallback={<RecipeDetailSkeleton />}>
      <RecipeDetailContent params={props.params} searchParams={props.searchParams} />
    </Suspense>
  );
}

async function RecipeDetailContent({
  params,
  searchParams,
}: Pick<
  PageProps<"/ingredients/[id]/recipes/[recipeId]">,
  "params" | "searchParams"
>) {
  const { id, recipeId } = await params;
  const query = await searchParams;

  const ingredient = getIngredientById(id);
  const recipe = getRecipeById(recipeId);
  if (!ingredient || !recipe || recipe.ingredientId !== ingredient.id) {
    notFound();
  }

  const monthParam = Array.isArray(query.month) ? query.month[0] : query.month;
  const parsedMonth = Number(monthParam);
  const month =
    Number.isInteger(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12
      ? parsedMonth
      : ingredient.months[0];

  const otherRecipes = getRecipesByIngredientId(ingredient.id).filter(
    (item) => item.id !== recipe.id,
  );

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-cream pb-10">
      <div className="px-5 pt-4">
        <BackLink
          href={`/ingredients/${ingredient.id}?month=${month}`}
          label="식재료 상세로 돌아가기"
        />
      </div>

      <PlaceholderPhoto
        emoji={recipe.emoji}
        label={`${recipe.name} 완성 사진`}
        className="mx-auto mt-2 size-56 rounded-full border-8 border-white text-9xl shadow-sm"
        bgClassName="bg-card-6"
      />

      <main className="flex flex-1 flex-col gap-5 px-5 pt-6">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">{recipe.name}</h1>
          <div className="mt-2 flex items-center gap-2">
            <KcalPill kcal={recipe.kcal} size="lg" />
            <span className="text-sm text-ink-muted">{recipe.servings} 기준</span>
          </div>
        </div>

        <IngredientInfoCallout ingredient={ingredient} month={month} />

        <section>
          <h2 className="text-lg font-bold text-ink">재료</h2>
          <ul className="mt-2 flex flex-col">
            {recipe.ingredientsUsed.map((line) => (
              <li
                key={line.name}
                className="flex items-center justify-between border-b border-line py-2.5 text-sm last:border-b-0"
              >
                <span className="text-ink">{line.name}</span>
                <span className="text-ink-muted">{line.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">만드는 법</h2>
          <div className="mt-3">
            <RecipeStepList steps={recipe.steps} />
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            칼로리는 재료와 조리법에 따라 달라질 수 있어요.
          </p>
        </section>

        {otherRecipes.length > 0 && (
          <section className="rounded-2xl bg-white p-4">
            <h2 className="text-base font-bold text-ink">다른 {ingredient.name} 레시피</h2>
            <div className="mt-1">
              {otherRecipes.map((item, index) => (
                <OtherRecipeRow
                  key={item.id}
                  recipe={item}
                  ingredientId={ingredient.id}
                  month={month}
                  thumbColor={cardColorAt(index)}
                />
              ))}
            </div>
            <Link
              href={`/ingredients/${ingredient.id}?month=${month}`}
              className="mt-3 flex h-11 items-center justify-center rounded-full bg-surface-muted text-sm font-semibold text-ink"
            >
              {ingredient.name} 레시피 모두 보기
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}

function RecipeDetailSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-cream">
      <div className="mx-auto mt-6 size-56 animate-pulse rounded-full bg-card-6" />
    </div>
  );
}
