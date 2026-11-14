import Image from "next/image";
import Link from "next/link";
import { TONE } from "@/lib/tone";
import type { Ingredient } from "@/lib/types";


type Props = { ingredient: Ingredient; month: number };

// 메인의 식재료 카드. 누르면 식재료 상세로 이동한다.
export default function IngredientCard({ ingredient, month }: Props) {
  return (
    <Link
      href={`/ingredients/${ingredient.id}?month=${month}`}
      className={`flex aspect-[3/4] min-h-11 flex-col items-center justify-center gap-3 rounded-3xl p-3 ${TONE[ingredient.tone]}`}
    >
      {ingredient.image ? (
        <Image src={ingredient.image} alt={ingredient.name} width={64} height={64} className="size-16 object-contain" />
      ) : (
        // 사진이 아직 없을 때 쓰는 자리표시자
        <span
          role="img"
          aria-label={ingredient.name}
          className="flex size-16 items-center justify-center rounded-full bg-white/70 text-2xl font-bold text-ink-soft"
        >
          {ingredient.name[0]}
        </span>
      )}
      <span className="text-base font-bold">{ingredient.name}</span>
    </Link>
  );
}
