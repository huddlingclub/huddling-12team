import Link from "next/link";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import type { Recipe } from "@/lib/types";

type RecipeListItemProps = {
  recipe: Recipe;
  ingredientId: string;
  month: number;
  thumbColor: string;
  isLightest: boolean;
};

export function RecipeListItem({
  recipe,
  ingredientId,
  month,
  thumbColor,
  isLightest,
}: RecipeListItemProps) {
  return (
    <Link
      href={`/ingredients/${ingredientId}/recipes/${recipe.id}?month=${month}`}
      className="relative flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm active:scale-[0.99]"
    >
      {isLightest && (
        <span className="absolute -top-2 right-3 rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-white">
          가장 가벼워요
        </span>
      )}

      <PlaceholderPhoto
        emoji={recipe.emoji}
        label={`${recipe.name} 사진`}
        className={`size-14 shrink-0 rounded-xl text-2xl ${thumbColor}`}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-ink">{recipe.name}</p>
        <p className="mt-0.5 text-xs text-ink-muted">재료 {recipe.ingredientsUsed.length}가지</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <p className="text-base font-bold text-accent">
          {recipe.kcal}
          <span className="ml-0.5 text-xs font-semibold text-ink-muted">kcal</span>
        </p>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ink-muted">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
