import axios from 'axios'

export function searchRecipe({commit}, keyword) {
    axios.get(`search.php?s=${keyword}`) 
    .then(({data}) => {
      commit('setSearchedRecipe', data)
    })
}