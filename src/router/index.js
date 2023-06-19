import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Ingredients from '../views/Ingredients.vue'
import RecipeByName from '../views/RecipeByName.vue'
import RecipeByIngredient from '../views/RecipeByIngredient.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import RecipeByLetter from '../views/RecipeByLetter.vue'
import Layout from '../components/Layout.vue'

const routes = [
    {
      path: '/',
      component: Layout,
    
    children: [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/recipe-by-name/:name?",
        name: "byRecipeName",
        component: RecipeByName,
    },
    {
        path: "/recipe-by-letter/:letter?",
        name: "byRecipeLetter",
        component: RecipeByLetter,
    },
    {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
    },
    {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: RecipeByIngredient,
    },
    {
        path: "/recipe/:id?",
        name: "recipeDetails",
        component: RecipeDetails,
    }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;