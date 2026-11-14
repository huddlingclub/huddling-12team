import { BackLink } from "@/components/BackLink";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { IngredientIcon } from "@/components/IngredientIcon";
import type { Ingredient } from "@/lib/types";

const ALL_MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

type IngredientDetailHeaderProps = {
  ingredient: Ingredient;
  month: number;
};

export function IngredientDetailHeader({ ingredient, month }: IngredientDetailHeaderProps) {
  return (
    <header className="px-5 pb-6 pt-4">
      <div className="grid grid-cols-[44px_1fr_44px] items-center">
        <BackLink href={`/?month=${month}`} label="메인으로 돌아가기" variant="onPhoto" />
        <p className="text-center text-sm font-semibold text-ink">{month}월 제철</p>
        <span />
      </div>

      <div className="mt-2 flex flex-col items-center gap-1 text-center">
        <PlaceholderPhoto
          emoji={<IngredientIcon ingredient={ingredient} />}
          label={`${ingredient.name} 사진`}
          className="flex size-24 items-center justify-center text-6xl"
        />
        <h1 className="text-3xl font-extrabold text-ink">{ingredient.name}</h1>
        <p className="text-sm text-ink-muted">{ingredient.description}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-brand-900 px-4 py-1.5 text-sm font-semibold text-white">
          <span aria-hidden="true">●</span>
          지금이 제철
        </span>
      </div>

      <div className="mt-5 flex justify-center gap-1">
        {ALL_MONTHS.map((m) => {
          const isSelected = m === month;
          const isInSeason = ingredient.months.includes(m);
          return (
            <span
              key={m}
              className={
                isSelected
                  ? "flex size-7 items-center justify-center rounded-full bg-brand-900 text-xs font-bold text-white"
                  : isInSeason
                    ? "flex size-7 items-center justify-center rounded-full bg-white/70 text-xs font-semibold text-brand-900"
                    : "flex size-7 items-center justify-center text-xs text-brand-900/50"
              }
            >
              {m}
            </span>
          );
        })}
      </div>
    </header>
  );
}
