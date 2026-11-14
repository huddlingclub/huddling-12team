import type { RecipeStep } from "@/lib/types";

type RecipeStepListProps = {
  steps: RecipeStep[];
};

export function RecipeStepList({ steps }: RecipeStepListProps) {
  return (
    <ol className="flex flex-col gap-3">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-bold text-white">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-ink">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
