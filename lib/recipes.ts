import data from "@/data/recipes.json";
import type { Recipe } from "@/lib/types";

const recipes = data as Recipe[];

// PRD: 식재료당 최대 5개. 칼로리 낮은 순으로 보여준다.
export function getRecipesByIngredient(ingredientId: string): Recipe[] {
  return recipes
    .filter((r) => r.ingredientId === ingredientId)
    .sort((a, b) => a.kcal - b.kcal)
    .slice(0, 5);
}

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getAllRecipes(): Recipe[] {
  return recipes;
}
