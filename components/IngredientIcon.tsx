import type { ReactNode } from "react";
import Image from "next/image";
import type { Ingredient } from "@/lib/types";

// 식재료 이미지를 테두리 없는 평면 일러스트(SVG)로 그려요.
// 실제 사진이나 피그마 이미지가 오면 이 파일만 바꾸면 돼요.
// 그림이 없는 식재료는 데이터의 이모지를 대신 보여줘요.
// 그림 크기는 1em이라서, 감싸는 곳의 글자 크기(text-5xl 등)를 따라 커지고 작아져요.

const ILLUSTRATIONS: Record<string, ReactNode> = {
  // 무: 뾰족한 초록 잎 + 위쪽이 연두색인 흰 뿌리
  radish: (
    <>
      <path d="M31 20 C27 12 22 8 15 6 C19 13 24 18 29 22 Z" fill="#5BA84A" />
      <path d="M32 21 C31 13 32 7 35 2 C37 9 36 15 34 21 Z" fill="#3E8E3A" />
      <path d="M33 20 C37 12 42 8 49 6 C45 13 40 18 35 22 Z" fill="#5BA84A" />
      <path d="M21 24 Q32 18 43 24 Q43 40 37 53 Q33 61 29 54 Q22 41 21 24 Z" fill="#FFFFFF" />
      <path d="M21 24 Q32 18 43 24 Q43 29 42 32 Q32 27 22 32 Q21 29 21 24 Z" fill="#D7EDC0" />
      <path d="M26 38 L30 38 M33 45 L37 45 M28 50 L31 50" stroke="#E4E4D8" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  // 배추: 세로로 긴 초록 잎 + 연두 속 + 흰 잎맥
  "napa-cabbage": (
    <>
      <ellipse cx="32" cy="33" rx="18" ry="27" fill="#6DB33F" />
      <ellipse cx="32" cy="35" rx="12" ry="21" fill="#CDEBA8" />
      <path d="M32 54 L32 20 M32 44 L25 36 M32 44 L39 36 M32 34 L27 28 M32 34 L37 28" stroke="#F4FAEC" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  // 굴: 회청색 껍데기 안에 뽀얀 속살
  oyster: (
    <>
      <circle cx="32" cy="32" r="27" fill="#AEBCC6" />
      <circle cx="32" cy="32" r="20" fill="#E8EDF0" />
      <ellipse cx="32" cy="32" rx="13" ry="11" fill="#F8F6EE" />
      <ellipse cx="32" cy="32" rx="6" ry="5" fill="#C9D3D9" />
    </>
  ),
  // 사과: 빨간 열매 + 갈색 꼭지 + 초록 잎
  apple: (
    <>
      <path d="M32 20 C22 12 8 18 10 34 C12 50 22 60 32 56 C42 60 52 50 54 34 C56 18 42 12 32 20 Z" fill="#E53935" />
      <ellipse cx="21" cy="30" rx="4" ry="7" fill="#F26B67" />
      <path d="M32 21 Q31 13 34 8" stroke="#6D4C41" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M34 13 Q42 4 50 8 Q44 17 34 13 Z" fill="#43A047" />
    </>
  ),
  // 귤: 주황 열매 + 작은 잎
  tangerine: (
    <>
      <circle cx="32" cy="36" r="23" fill="#FB8C00" />
      <ellipse cx="23" cy="29" rx="5" ry="4" fill="#FFB74D" />
      <circle cx="32" cy="14" r="2.5" fill="#558B2F" />
      <path d="M33 14 Q40 5 48 9 Q42 17 33 14 Z" fill="#43A047" />
    </>
  ),
  // 연근: 베이지 단면에 구멍이 뚫린 모양
  "lotus-root": (
    <>
      <circle cx="32" cy="32" r="27" fill="#D9BF94" />
      <circle cx="32" cy="32" r="24" fill="#EFDDBE" />
      <circle cx="32" cy="32" r="5" fill="#B9956A" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={32 + 14.5 * Math.cos(rad)}
            cy={32 + 14.5 * Math.sin(rad)}
            r="5"
            fill="#B9956A"
          />
        );
      })}
    </>
  ),
  // 꼬막: 골이 진 갈색 조개껍데기
  cockle: (
    <>
      <path d="M8 40 C8 18 20 8 32 8 C44 8 56 18 56 40 C56 50 46 54 32 54 C18 54 8 50 8 40 Z" fill="#A86B3C" />
      <path
        d="M32 52 L32 10 M32 52 L22 12 M32 52 L42 12 M32 52 L14 20 M32 52 L50 20 M32 52 L10 32 M32 52 L54 32"
        stroke="#7B4A2A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M24 52 Q32 60 40 52 Z" fill="#7B4A2A" />
    </>
  ),
  // 유자: 노란 열매 + 오톨도톨한 점 + 잎
  yuzu: (
    <>
      <circle cx="32" cy="36" r="23" fill="#FDD835" />
      <ellipse cx="23" cy="29" rx="5" ry="4" fill="#FFF176" />
      {[
        [38, 30],
        [44, 40],
        [30, 46],
        [22, 40],
        [36, 52],
        [46, 30],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.3" fill="#F2B705" />
      ))}
      <circle cx="32" cy="14" r="2.5" fill="#558B2F" />
      <path d="M31 14 Q24 5 16 9 Q22 17 31 14 Z" fill="#43A047" />
    </>
  ),
  // 시금치: 진초록 잎 묶음 + 분홍 뿌리
  spinach: (
    <>
      <path d="M32 50 Q13 42 11 18 Q26 22 32 50 Z" fill="#2E7D32" />
      <path d="M32 50 Q51 42 53 18 Q38 22 32 50 Z" fill="#2E7D32" />
      <path d="M32 50 Q21 30 32 5 Q43 30 32 50 Z" fill="#43A047" />
      <path d="M32 48 L32 14" stroke="#A5D6A7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 49 Q32 62 36 49 Z" fill="#E57373" />
    </>
  ),
  // 단감: 납작한 주황 열매 + 네 장의 초록 꼭지
  persimmon: (
    <>
      <ellipse cx="32" cy="38" rx="25" ry="20" fill="#F57C00" />
      <ellipse cx="22" cy="33" rx="5" ry="4" fill="#FFA74D" />
      <path d="M32 21 L18 17 Q22 26 32 23 Z" fill="#558B2F" />
      <path d="M32 21 L46 17 Q42 26 32 23 Z" fill="#558B2F" />
      <path d="M32 21 L25 28 Q32 30 32 23 Z" fill="#689F38" />
      <path d="M32 21 L39 28 Q32 30 32 23 Z" fill="#689F38" />
      <rect x="30.5" y="13" width="3" height="8" rx="1.5" fill="#6D4C41" />
    </>
  ),
};

type IngredientIconProps = {
  ingredient: Pick<Ingredient, "id" | "name" | "emoji" | "image">;
};

export function IngredientIcon({ ingredient }: IngredientIconProps) {
  // 메인 카드와 같은 그림 파일이 있으면 그걸 먼저 보여줘요.
  if (ingredient.image) {
    return (
      <Image
        src={ingredient.image}
        alt={ingredient.name}
        width={800}
        height={800}
        className="inline-block size-[1em] object-contain"
      />
    );
  }

  const illustration = ILLUSTRATIONS[ingredient.id];

  if (!illustration) {
    return <span aria-hidden="true">{ingredient.emoji}</span>;
  }

  return (
    <svg viewBox="0 0 64 64" width="1em" height="1em" aria-hidden="true">
      {illustration}
    </svg>
  );
}
