export function setSearchedRecipe(state, meals) {
    state.searchedRecipe = meals || []
}

export function setRecipeByLetter(state, meals) {
    state.recipeByLetter = meals || []
}

export function setRecipeByIngredient(state, meals) {
    state.recipeByIngredients = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}