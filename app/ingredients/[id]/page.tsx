import { Suspense } from "react";
import { notFound } from "next/navigation";
import { IngredientDetailHeader } from "@/components/IngredientDetailHeader";
import { RecipeListItem } from "@/components/RecipeListItem";
import { SectionHeading } from "@/components/SectionHeading";
import { EmptyState } from "@/components/EmptyState";
import { cardColorAt } from "@/lib/colors";
import {
  getIngredientById,
  getLightestRecipeId,
  getRecipesByIngredientId,
} from "@/lib/data";

export default function IngredientDetailPage(
  props: PageProps<"/ingredients/[id]">,
) {
  return (
    <Suspense fallback={<IngredientDetailSkeleton />}>
      <IngredientDetailContent params={props.params} searchParams={props.searchParams} />
    </Suspense>
  );
}

async function IngredientDetailContent({
  params,
  searchParams,
}: Pick<PageProps<"/ingredients/[id]">, "params" | "searchParams">) {
  const { id } = await params;
  const query = await searchParams;

  const ingredient = getIngredientById(id);
  if (!ingredient) {
    notFound();
  }

  const monthParam = Array.isArray(query.month) ? query.month[0] : query.month;
  const parsedMonth = Number(monthParam);
  const month =
    Number.isInteger(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12
      ? parsedMonth
      : ingredient.months[0];

  const recipes = getRecipesByIngredientId(ingredient.id);
  const lightestRecipeId = getLightestRecipeId(recipes);

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-brand-100">
      <IngredientDetailHeader ingredient={ingredient} month={month} />

      <main className="flex flex-1 flex-col gap-4 rounded-t-3xl bg-surface-muted px-5 pb-10 pt-6">
        <SectionHeading title={`${ingredient.name}로 이런 걸 만들 수 있어요`} badge="1인분" />

        {recipes.length === 0 ? (
          <EmptyState message="이 식재료의 레시피는 아직 준비 중이에요" />
        ) : (
          <div className="flex flex-col gap-4">
            {recipes.map((recipe, index) => (
              <RecipeListItem
                key={recipe.id}
                recipe={recipe}
                ingredientId={ingredient.id}
                month={month}
                thumbColor={cardColorAt(index)}
                isLightest={recipe.id === lightestRecipeId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function IngredientDetailSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col bg-brand-100">
      <div className="h-80 animate-pulse" />
    </div>
  );
}
