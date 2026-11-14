// 제철밥상에서 쓰는 데이터 타입을 한 곳에서 관리한다.

// 식재료 (PRD: 식재료명, 사진, 제철 월)
export type Ingredient = {
  id: string;
  name: string;
  // 사진 경로. 아직 이미지가 없으면 null (자리표시자로 보여준다)
  image: string | null;
  // 제철인 달 (1~12)
  months: number[];
  // 카드 배경색 토큰 이름 (피그마 카드 색상)
  tone: IngredientTone;
};

// 피그마 메인 화면 카드 배경색 종류
export type IngredientTone =
  | "green"
  | "lime"
  | "sky"
  | "rose"
  | "orange"
  | "sand"
  | "brown"
  | "yellow"
  | "mint"
  | "peach";

// 레시피 (PRD: 레시피명, 사진, 칼로리, 레시피 내용(사진 포함), 연결 식재료)
export type Recipe = {
  id: string;
  // 연결 식재료 id
  ingredientId: string;
  name: string;
  image: string | null;
  // 칼로리 (kcal)
  kcal: number;
  // 기준 분량 (예: "1인분")
  serving: string;
  // 재료와 양
  items: { name: string; amount: string }[];
  // 만드는 법 (단계별 설명 + 사진)
  steps: { text: string; image: string | null }[];
};
