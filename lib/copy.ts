// 화면에 보이는 문구를 한 곳에 모아둔 파일이에요.
// 출처: GitHub copy-json 브랜치의 months.json → "copy" 부분 (세화님 카피라이팅).
// {m}, {name} 같은 칸은 fillCopy()로 실제 값을 채워 넣어요.

export const COPY = {
  mainTitle: "이번 달엔 이게 제철이에요",
  sectionIngredients: "{m}월 제철 식재료",
  cardButton: "레시피 보기 →",
  detailTop: "{m}월 제철",
  inSeasonChip: "지금이 제철",
  sectionRecipes: "{name}로 이런 걸 만들 수 있어요",
  kcalBasis: "1인분 기준",
  lightestBadge: "가장 가벼워요",
  infoBoxTitle: "{name} · 지금이 제철이에요",
  infoBoxSub: "제철 {season} · {taste}",
  sectionParts: "재료",
  sectionSteps: "만드는 법",
  emptyRecipes: "아직 레시피가 없어요",
  emptyRecipesSub: "다른 재료부터 둘러볼까요?",
  cardNoRecipe: "레시피 준비 중",
  noKcal: "칼로리 정보 없음",
  noSteps: "만드는 법 준비 중이에요",
  emptyMonth: "{m}월 재료를 준비하고 있어요",
  loading: "이번 달 식탁을 차리는 중…",
  error: "식탁이 아직 안 차려졌어요",
  errorSub: "잠시 후 다시 열어주세요",
} as const;

/** "{m}월 제철" 같은 문구의 {칸}을 실제 값으로 바꿔요. 예: fillCopy(COPY.detailTop, { m: 11 }) → "11월 제철" */
export function fillCopy(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
