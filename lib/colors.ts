// 레시피 썸네일처럼, 데이터에 색상이 없는 목록에 돌아가며 쓰는 파스텔 톤 모음입니다.
// (app/globals.css의 @theme에 정의된 card-1~card-10 토큰)

const CARD_COLORS = [
  "bg-card-1",
  "bg-card-2",
  "bg-card-3",
  "bg-card-4",
  "bg-card-5",
  "bg-card-6",
  "bg-card-7",
  "bg-card-8",
  "bg-card-9",
  "bg-card-10",
];

export function cardColorAt(index: number): string {
  return CARD_COLORS[index % CARD_COLORS.length];
}
