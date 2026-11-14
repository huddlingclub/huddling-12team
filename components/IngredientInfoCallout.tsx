import Link from "next/link";
import { IngredientIcon } from "@/components/IngredientIcon";
import { COPY, fillCopy } from "@/lib/copy";
import type { Ingredient } from "@/lib/types";

type IngredientInfoCalloutProps = {
  ingredient: Ingredient;
  month: number;
};

export function IngredientInfoCallout({ ingredient, month }: IngredientInfoCalloutProps) {
  return (
    <Link
      href={`/ingredients/${ingredient.id}?month=${month}`}
      className="flex items-center gap-3 rounded-2xl bg-brand-100 p-4"
    >
      <span className="text-3xl" aria-hidden="true">
        <IngredientIcon ingredient={ingredient} />
      </span>
      <div>
        <p className="font-bold text-brand-900">
          {fillCopy(COPY.infoBoxTitle, { name: ingredient.name })}
        </p>
        <p className="text-xs text-ink-muted">
          {ingredient.seasonLabel} · {ingredient.description}
        </p>
      </div>
    </Link>
  );
}
