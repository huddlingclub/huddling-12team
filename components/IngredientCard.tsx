import Link from "next/link";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import type { Ingredient } from "@/lib/types";

type IngredientCardProps = {
  ingredient: Ingredient;
  month: number;
};

export function IngredientCard({ ingredient, month }: IngredientCardProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.id}?month=${month}`}
      className={`flex flex-col gap-1.5 rounded-2xl p-3 transition-transform active:scale-[0.98] ${ingredient.cardColor}`}
    >
      <PlaceholderPhoto
        emoji={ingredient.emoji}
        label={`${ingredient.name} 사진`}
        className="aspect-square w-full rounded-xl bg-white/50 text-2xl"
      />
      <p className="text-sm font-bold text-ink">{ingredient.name}</p>
      <p className="text-[11px] leading-tight text-ink-muted">{ingredient.description}</p>
      <span className="text-[11px] font-semibold text-brand-600">레시피 보기 ›</span>
    </Link>
  );
}
