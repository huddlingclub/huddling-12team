import Link from "next/link";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import type { Recipe } from "@/lib/types";

type OtherRecipeRowProps = {
  recipe: Recipe;
  ingredientId: string;
  month: number;
  thumbColor: string;
};

export function OtherRecipeRow({ recipe, ingredientId, month, thumbColor }: OtherRecipeRowProps) {
  return (
    <Link
      href={`/ingredients/${ingredientId}/recipes/${recipe.id}?month=${month}`}
      className="flex items-center gap-3 border-b border-line py-3 last:border-b-0"
    >
      <PlaceholderPhoto
        emoji={recipe.emoji}
        label={`${recipe.name} 사진`}
        className={`size-11 shrink-0 rounded-xl text-xl ${thumbColor}`}
      />
      <p className="flex-1 font-semibold text-ink">{recipe.name}</p>
      <p className="text-sm font-bold text-accent">
        {recipe.kcal}
        <span className="ml-0.5 text-xs font-semibold text-ink-muted">kcal</span>
      </p>
    </Link>
  );
}
