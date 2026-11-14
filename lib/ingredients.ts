import data from "@/data/ingredients.json";
import type { Ingredient } from "@/lib/types";

const ingredients = data as Ingredient[];

// PRD: 월당 최대 10개
const MAX_PER_MONTH = 10;

// 선택한 달의 제철 식재료 목록
export function getIngredientsByMonth(month: number): Ingredient[] {
  return ingredients.filter((i) => i.months.includes(month)).slice(0, MAX_PER_MONTH);
}

// URL의 month 값(문자열)을 1~12 숫자로 바꾼다. 잘못된 값이면 null
export function parseMonth(value: string | string[] | undefined): number | null {
  if (typeof value !== "string") return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : null;
}

// 한국 시간 기준 오늘 날짜
export function todayInKorea() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return { year: get("year"), month: get("month"), day: get("day") };
}

export function getIngredient(id: string): Ingredient | undefined {
  return ingredients.find((i) => i.id === id);
}

export function getAllIngredients(): Ingredient[] {
  return ingredients;
}

// 제철 월을 "10~12월"처럼 짧게 표시한다 (연속이 아니면 쉼표로 나열)
export function formatSeason(months: number[]): string {
  const sorted = [...months].sort((a, b) => a - b);
  const contiguous = sorted.every((m, i) => i === 0 || m === sorted[i - 1] + 1);
  if (contiguous && sorted.length > 1) return `${sorted[0]}~${sorted[sorted.length - 1]}월`;
  return `${months.join("·")}월`;
}

// 받침에 따라 "로/으로"를 붙인다 (예: 무로, 연근으로, 굴로)
export function withRo(word: string): string {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  if (code < 0 || code > 11171) return `${word}로`;
  const jong = code % 28;
  return jong === 0 || jong === 8 ? `${word}로` : `${word}으로`;
}
