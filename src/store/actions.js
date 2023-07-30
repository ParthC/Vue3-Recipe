import axios from '../axiosClient'

export function searchRecipe({commit}, keyword) {
  axios.get(`search.php?s=${keyword}`) 
    .then(({data}) => {
      commit('SET_SEARCHED_RECIPE', data.meals)
  })  
}

export function searchRecipeByLetter({ commit }, letter) {
  axios.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('SET_RECIPE_BY_LETTER', data.meals)
  })
}

export function searchRecipeByIngredient({ commit }, ing) {
  axios.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('SET_RECIPE_BY_INGREDIENT', data.meals)
  })
}