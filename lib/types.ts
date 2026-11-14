// 데이터 타입을 한 곳에서 관리합니다 (CLAUDE.md 4번 규칙).

export type Ingredient = {
  id: string;
  name: string;
  /** 카드에 보이는 짧은 한 줄 설명 (예: "달큰하고 아삭해요") */
  description: string;
  /** 제철 월 (1~12), 메인 화면에서 이 값으로 필터링 */
  months: number[];
  /** 레시피 상세의 식재료 안내 카드에 쓰는 "제철 10~12월" 같은 문구 */
  seasonLabel: string;
  /** 사진 대신 쓰는 임시 이모지 (실제 사진은 Figma 디자인 확정 후 교체) */
  emoji: string;
  /** 메인 화면 카드 배경색 토큰 (app/globals.css의 @theme 참고) */
  cardColor: string;
};

export type RecipeIngredientLine = {
  name: string;
  amount: string;
};

export type RecipeStep = {
  description: string;
};

export type Recipe = {
  id: string;
  ingredientId: string;
  name: string;
  kcal: number;
  servings: string;
  /** 사진 대신 쓰는 임시 이모지 */
  emoji: string;
  ingredientsUsed: RecipeIngredientLine[];
  steps: RecipeStep[];
};
