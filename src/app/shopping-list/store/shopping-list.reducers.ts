import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients:  [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT: 
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state, ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENTS:
            const ingredient = state.ingredients[action.payload.index];
            const updateingredient = {
                ...ingredient, ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updateingredient;
            return {
                ...state, ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENTS:
            const oldingredients = [...state.ingredients];
            oldingredients.splice(action.payload, 1);
            return {
                ...state, ingredients: oldingredients
            }
        default: return state;

    }
}