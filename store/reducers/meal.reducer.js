import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOOGLE_FAVORITE} from "../actions/meals.action";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals};
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeal = state.meals.filter(meal => {
            if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                return false;
            }
            if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                return false;
            }
            if (appliedFilters.vegetarian && !meal.isVegetarian) {
                return false;
            }
            return !(appliedFilters.vegan && !meal.isVegan);

        });
            return {...state, filteredMeals: updatedFilteredMeal}
        default:
            return state;
    }

}

export default mealsReducer;