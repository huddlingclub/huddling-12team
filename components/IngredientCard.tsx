import Image from "next/image";
import Link from "next/link";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { IngredientIcon } from "@/components/IngredientIcon";
import type { Ingredient } from "@/lib/types";

type IngredientCardProps = {
  ingredient: Ingredient;
  month: number;
};

export function IngredientCard({ ingredient, month }: IngredientCardProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.id}?month=${month}`}
      className={`flex flex-col gap-1.5 rounded-2xl p-2 transition-transform active:scale-[0.98] ${ingredient.cardColor}`}
    >
      {ingredient.image ? (
        // 그림이 있으면 그림을, 없으면 아이콘(이모지)을 보여줘요.
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={800}
          height={800}
          className="aspect-square w-full rounded-xl object-cover"
        />
      ) : (
        <PlaceholderPhoto
          emoji={<IngredientIcon ingredient={ingredient} />}
          label={`${ingredient.name} 사진`}
          className="aspect-square w-full rounded-xl bg-white/50 text-7xl"
        />
      )}
      <p className="text-sm font-bold text-ink">{ingredient.name}</p>
      <p className="text-[11px] leading-tight text-ink-muted">{ingredient.description}</p>
      <span className="text-[11px] font-semibold text-brand-600">레시피 보기 ›</span>
    </Link>
  );
}
