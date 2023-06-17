import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import RecipeByName from '../views/RecipeByName.vue'
import RecipeByIngredient from '../views/RecipeByIngredient.vue'


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/character/:item?",
        name: "byCharacter",
        component: MealList
    },
    {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: RecipeByIngredient
    },
    {
        path: '/by-recipe-by-name/:recipebyname?',
        name: 'byRecipeName',
        component: RecipeByName
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;