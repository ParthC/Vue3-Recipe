export function SET_SEARCHED_RECIPE(state, meals) {
    state.searchedRecipe = meals || []
}

export function SET_RECIPE_BY_LETTER(state, meals) {
    state.recipeByLetter = meals || []
}

export function SET_RECIPE_BY_INGREDIENT(state, meals) {
    state.recipeByIngredients = meals || []
}

export function SET_INGREDIENT(state, ingredient) {
    state.ingredient = ingredient
}