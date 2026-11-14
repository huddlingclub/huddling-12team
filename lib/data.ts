import type { Ingredient, Recipe } from "@/lib/types";

// 임시 샘플 데이터입니다. 사진은 아직 없어서 이모지로 대신하고,
// 지금은 가을·겨울 식재료 10가지만 채워뒀어요. 다른 계절은 추후에 추가합니다.

export const INGREDIENTS: Ingredient[] = [
  {
    id: "radish",
    name: "무",
    description: "달큰하고 아삭해요",
    months: [10, 11, 12],
    seasonLabel: "제철 10~12월",
    emoji: "🥕",
    cardColor: "bg-card-1",
  },
  {
    id: "napa-cabbage",
    name: "배추",
    description: "속이 꽉 찼어요",
    months: [10, 11, 12],
    seasonLabel: "제철 10~12월",
    emoji: "🥬",
    cardColor: "bg-card-2",
  },
  {
    id: "oyster",
    name: "굴",
    description: "바다의 우유",
    months: [10, 11, 12, 1, 2],
    seasonLabel: "제철 10월~2월",
    emoji: "🦪",
    cardColor: "bg-card-3",
  },
  {
    id: "apple",
    name: "사과",
    description: "새콤달콤 아삭",
    months: [9, 10, 11],
    seasonLabel: "제철 9~11월",
    emoji: "🍎",
    cardColor: "bg-card-4",
  },
  {
    id: "tangerine",
    name: "귤",
    description: "손이 자꾸 가요",
    months: [11, 12, 1],
    seasonLabel: "제철 11월~1월",
    emoji: "🍊",
    cardColor: "bg-card-5",
  },
  {
    id: "lotus-root",
    name: "연근",
    description: "아삭한 뿌리채소",
    months: [10, 11, 12],
    seasonLabel: "제철 10~12월",
    emoji: "🪷",
    cardColor: "bg-card-6",
  },
  {
    id: "cockle",
    name: "꼬막",
    description: "쫄깃한 겨울 맛",
    months: [10, 11, 12, 1],
    seasonLabel: "제철 10월~1월",
    emoji: "🐚",
    cardColor: "bg-card-7",
  },
  {
    id: "yuzu",
    name: "유자",
    description: "향긋한 비타민",
    months: [10, 11, 12],
    seasonLabel: "제철 10~12월",
    emoji: "🍋",
    cardColor: "bg-card-8",
  },
  {
    id: "spinach",
    name: "시금치",
    description: "추울수록 달아요",
    months: [11, 12, 1, 2],
    seasonLabel: "제철 11월~2월",
    emoji: "🥦",
    cardColor: "bg-card-9",
  },
  {
    id: "persimmon",
    name: "단감",
    description: "아삭하고 달아요",
    months: [10, 11],
    seasonLabel: "제철 10~11월",
    emoji: "🍅",
    cardColor: "bg-card-10",
  },
];

export const RECIPES: Recipe[] = [
  // 무 (5개, 시안 이미지와 동일하게 구성)
  {
    id: "radish-muchim",
    ingredientId: "radish",
    name: "무생채",
    kcal: 45,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "무", amount: "200g" },
      { name: "고춧가루", amount: "1큰술" },
      { name: "식초", amount: "1큰술" },
      { name: "설탕", amount: "1작은술" },
    ],
    steps: [
      { description: "무는 채칼로 가늘게 채 썰어요." },
      { description: "고춧가루를 먼저 넣고 버무려 붉은 물을 들여요." },
      { description: "식초, 설탕, 소금을 넣고 새콤달콤하게 무쳐요." },
    ],
  },
  {
    id: "radish-perilla-namul",
    ingredientId: "radish",
    name: "들기름 무나물",
    kcal: 60,
    servings: "1인분",
    emoji: "🍲",
    ingredientsUsed: [
      { name: "무", amount: "200g" },
      { name: "들기름", amount: "1큰술" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "소금", amount: "약간" },
    ],
    steps: [
      { description: "무는 얇게 채 썰어요." },
      { description: "들기름에 다진 마늘과 무를 넣고 볶아요." },
      { description: "무가 투명해지면 물을 약간 넣고 뚜껑 덮어 익혀요." },
    ],
  },
  {
    id: "radish-spicy-jorim",
    ingredientId: "radish",
    name: "매콤 무조림",
    kcal: 95,
    servings: "1인분",
    emoji: "🍛",
    ingredientsUsed: [
      { name: "무", amount: "250g" },
      { name: "고추장", amount: "1큰술" },
      { name: "간장", amount: "1큰술" },
      { name: "다진 마늘", amount: "1작은술" },
    ],
    steps: [
      { description: "무는 도톰하게 반달 모양으로 썰어요." },
      { description: "양념장을 섞어 무에 끼얹고 냄비에 올려요." },
      { description: "물을 자작하게 붓고 국물이 졸아들 때까지 조려요." },
    ],
  },
  {
    id: "radish-beef-soup",
    ingredientId: "radish",
    name: "맑은 소고기뭇국",
    kcal: 120,
    servings: "1인분",
    emoji: "🍲",
    ingredientsUsed: [
      { name: "무", amount: "200g" },
      { name: "소고기 양지", amount: "80g" },
      { name: "대파", amount: "1/2대" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "국간장", amount: "1큰술" },
    ],
    steps: [
      { description: "무는 나박나박 얇게 썰어요." },
      { description: "소고기를 먼저 볶다가 무를 넣고 함께 볶아요." },
      { description: "물을 붓고 무가 투명해질 때까지 끓인 뒤 국간장으로 간을 맞춰요." },
    ],
  },
  {
    id: "radish-bap",
    ingredientId: "radish",
    name: "무밥",
    kcal: 280,
    servings: "1인분",
    emoji: "🍚",
    ingredientsUsed: [
      { name: "쌀", amount: "1공기" },
      { name: "무", amount: "150g" },
      { name: "양념간장", amount: "2큰술" },
    ],
    steps: [
      { description: "무는 굵게 채 썰어요." },
      { description: "씻은 쌀 위에 무를 얹고 평소처럼 밥을 지어요." },
      { description: "양념간장을 곁들여 쓱쓱 비벼 먹어요." },
    ],
  },

  // 배추
  {
    id: "napa-geotjeori",
    ingredientId: "napa-cabbage",
    name: "배추 겉절이",
    kcal: 50,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "배추", amount: "200g" },
      { name: "고춧가루", amount: "1큰술" },
      { name: "액젓", amount: "1작은술" },
    ],
    steps: [
      { description: "배추는 한입 크기로 썰어요." },
      { description: "양념을 모두 섞어 배추에 바로 버무려요." },
    ],
  },
  {
    id: "napa-doenjang-soup",
    ingredientId: "napa-cabbage",
    name: "된장 배춧국",
    kcal: 90,
    servings: "1인분",
    emoji: "🍲",
    ingredientsUsed: [
      { name: "배추", amount: "150g" },
      { name: "된장", amount: "1큰술" },
      { name: "두부", amount: "1/4모" },
    ],
    steps: [
      { description: "육수에 된장을 풀어요." },
      { description: "배추와 두부를 넣고 배추가 부드러워질 때까지 끓여요." },
    ],
  },

  // 굴
  {
    id: "oyster-muchim",
    ingredientId: "oyster",
    name: "굴무침",
    kcal: 70,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "굴", amount: "150g" },
      { name: "고춧가루", amount: "1작은술" },
      { name: "쪽파", amount: "약간" },
    ],
    steps: [
      { description: "굴은 소금물에 살살 헹궈 물기를 빼요." },
      { description: "양념에 가볍게 버무려요." },
    ],
  },
  {
    id: "oyster-jeon",
    ingredientId: "oyster",
    name: "굴전",
    kcal: 180,
    servings: "1인분",
    emoji: "🍳",
    ingredientsUsed: [
      { name: "굴", amount: "150g" },
      { name: "밀가루", amount: "3큰술" },
      { name: "달걀", amount: "1개" },
    ],
    steps: [
      { description: "굴에 밀가루, 달걀물을 순서대로 묻혀요." },
      { description: "팬에 기름을 두르고 노릇하게 부쳐요." },
    ],
  },

  // 사과
  {
    id: "apple-salad",
    ingredientId: "apple",
    name: "사과 샐러드",
    kcal: 120,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "사과", amount: "1/2개" },
      { name: "양상추", amount: "한 줌" },
      { name: "요거트 드레싱", amount: "2큰술" },
    ],
    steps: [
      { description: "사과와 채소를 한입 크기로 썰어요." },
      { description: "드레싱을 뿌려 가볍게 버무려요." },
    ],
  },
  {
    id: "apple-compote",
    ingredientId: "apple",
    name: "사과 콤포트",
    kcal: 140,
    servings: "1인분",
    emoji: "🍯",
    ingredientsUsed: [
      { name: "사과", amount: "1개" },
      { name: "계핏가루", amount: "약간" },
      { name: "물", amount: "3큰술" },
    ],
    steps: [
      { description: "사과는 얇게 슬라이스해요." },
      { description: "약불에 물과 함께 부드러워질 때까지 조려요." },
    ],
  },

  // 귤
  {
    id: "tangerine-sorbet",
    ingredientId: "tangerine",
    name: "귤 셔벗",
    kcal: 90,
    servings: "1인분",
    emoji: "🍧",
    ingredientsUsed: [
      { name: "귤", amount: "3개" },
      { name: "레몬즙", amount: "1작은술" },
    ],
    steps: [
      { description: "귤은 껍질을 까서 얼려둬요." },
      { description: "얼린 귤을 레몬즙과 함께 갈아요." },
    ],
  },
  {
    id: "tangerine-pickle",
    ingredientId: "tangerine",
    name: "귤 피클",
    kcal: 60,
    servings: "1인분",
    emoji: "🫙",
    ingredientsUsed: [
      { name: "귤", amount: "2개" },
      { name: "식초", amount: "3큰술" },
      { name: "설탕", amount: "1큰술" },
    ],
    steps: [
      { description: "귤은 껍질째 얇게 썰어요." },
      { description: "절임물을 끓여 식힌 뒤 귤에 부어요." },
    ],
  },

  // 연근
  {
    id: "lotus-root-jorim",
    ingredientId: "lotus-root",
    name: "연근조림",
    kcal: 110,
    servings: "1인분",
    emoji: "🍱",
    ingredientsUsed: [
      { name: "연근", amount: "200g" },
      { name: "간장", amount: "2큰술" },
      { name: "물엿", amount: "1큰술" },
    ],
    steps: [
      { description: "연근은 얇게 썰어 식초물에 담가둬요." },
      { description: "양념장에 조림하듯 윤기 나게 졸여요." },
    ],
  },
  {
    id: "lotus-root-jeon",
    ingredientId: "lotus-root",
    name: "연근전",
    kcal: 160,
    servings: "1인분",
    emoji: "🍳",
    ingredientsUsed: [
      { name: "연근", amount: "150g" },
      { name: "밀가루", amount: "3큰술" },
      { name: "달걀", amount: "1개" },
    ],
    steps: [
      { description: "연근은 둥글게 썰어 전분을 묻혀요." },
      { description: "달걀물을 입혀 노릇하게 부쳐요." },
    ],
  },

  // 꼬막
  {
    id: "cockle-muchim",
    ingredientId: "cockle",
    name: "꼬막무침",
    kcal: 130,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "꼬막", amount: "300g" },
      { name: "간장", amount: "2큰술" },
      { name: "고춧가루", amount: "1큰술" },
    ],
    steps: [
      { description: "꼬막은 삶아서 한쪽 껍데기만 떼어내요." },
      { description: "양념장을 끼얹어 버무려요." },
    ],
  },
  {
    id: "cockle-bibimbap",
    ingredientId: "cockle",
    name: "꼬막비빔밥",
    kcal: 350,
    servings: "1인분",
    emoji: "🍚",
    ingredientsUsed: [
      { name: "꼬막무침", amount: "1접시" },
      { name: "밥", amount: "1공기" },
      { name: "참기름", amount: "1작은술" },
    ],
    steps: [
      { description: "밥 위에 꼬막무침을 듬뿍 올려요." },
      { description: "참기름을 두르고 쓱쓱 비벼요." },
    ],
  },

  // 유자
  {
    id: "yuzu-tea",
    ingredientId: "yuzu",
    name: "유자차",
    kcal: 80,
    servings: "1인분",
    emoji: "🍵",
    ingredientsUsed: [
      { name: "유자청", amount: "2큰술" },
      { name: "따뜻한 물", amount: "1컵" },
    ],
    steps: [
      { description: "컵에 유자청을 넣어요." },
      { description: "따뜻한 물을 붓고 잘 저어요." },
    ],
  },
  {
    id: "yuzu-salad",
    ingredientId: "yuzu",
    name: "유자소스 샐러드",
    kcal: 100,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "유자청", amount: "1큰술" },
      { name: "올리브유", amount: "1큰술" },
      { name: "채소", amount: "한 줌" },
    ],
    steps: [
      { description: "유자청과 올리브유를 섞어 드레싱을 만들어요." },
      { description: "채소에 드레싱을 뿌려 버무려요." },
    ],
  },

  // 시금치
  {
    id: "spinach-namul",
    ingredientId: "spinach",
    name: "시금치나물",
    kcal: 45,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "시금치", amount: "200g" },
      { name: "참기름", amount: "1작은술" },
      { name: "다진 마늘", amount: "약간" },
    ],
    steps: [
      { description: "시금치는 끓는 물에 살짝 데쳐요." },
      { description: "찬물에 헹군 뒤 양념에 조물조물 무쳐요." },
    ],
  },
  {
    id: "spinach-doenjang-soup",
    ingredientId: "spinach",
    name: "시금치된장국",
    kcal: 70,
    servings: "1인분",
    emoji: "🍲",
    ingredientsUsed: [
      { name: "시금치", amount: "150g" },
      { name: "된장", amount: "1큰술" },
      { name: "두부", amount: "1/4모" },
    ],
    steps: [
      { description: "육수에 된장을 풀어 끓여요." },
      { description: "시금치와 두부를 넣고 한소끔 더 끓여요." },
    ],
  },

  // 단감
  {
    id: "persimmon-salad",
    ingredientId: "persimmon",
    name: "단감 샐러드",
    kcal: 95,
    servings: "1인분",
    emoji: "🥗",
    ingredientsUsed: [
      { name: "단감", amount: "1개" },
      { name: "루꼴라", amount: "한 줌" },
      { name: "발사믹 드레싱", amount: "1큰술" },
    ],
    steps: [
      { description: "단감은 얇게 슬라이스해요." },
      { description: "루꼴라와 함께 담고 드레싱을 뿌려요." },
    ],
  },
  {
    id: "persimmon-jorim",
    ingredientId: "persimmon",
    name: "단감조림",
    kcal: 130,
    servings: "1인분",
    emoji: "🍯",
    ingredientsUsed: [
      { name: "단감", amount: "1개" },
      { name: "간장", amount: "1큰술" },
      { name: "물엿", amount: "1큰술" },
    ],
    steps: [
      { description: "단감은 큼직하게 썰어요." },
      { description: "양념과 함께 약불에서 윤기 나게 조려요." },
    ],
  },
];

export function getIngredientsByMonth(month: number): Ingredient[] {
  return INGREDIENTS.filter((ingredient) => ingredient.months.includes(month)).slice(0, 10);
}

export function getIngredientById(id: string): Ingredient | undefined {
  return INGREDIENTS.find((ingredient) => ingredient.id === id);
}

export function getRecipesByIngredientId(ingredientId: string): Recipe[] {
  return RECIPES.filter((recipe) => recipe.ingredientId === ingredientId).slice(0, 5);
}

export function getRecipeById(recipeId: string): Recipe | undefined {
  return RECIPES.find((recipe) => recipe.id === recipeId);
}

export function getLightestRecipeId(recipes: Recipe[]): string | undefined {
  if (recipes.length === 0) return undefined;
  return recipes.reduce((lightest, recipe) => (recipe.kcal < lightest.kcal ? recipe : lightest)).id;
}
