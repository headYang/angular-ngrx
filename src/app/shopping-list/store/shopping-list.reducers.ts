import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
    ingredients:  [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};
export function shoppingListReducer(state = initialState, action:Action) {
    switch(action.type) {
        case ADD_INGREDIENT: 
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            }
    }
    return state;
}